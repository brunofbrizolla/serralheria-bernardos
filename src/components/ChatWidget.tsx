import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

type ChatStep = 'greeting' | 'name' | 'telefone' | 'service' | 'complete';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<ChatStep>('greeting');
  const [userData, setUserData] = useState({
    name: '',
    telefone: '',
    service: ''
  });
  const [inputValue, setInputValue] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [hasShownScrollMessage, setHasShownScrollMessage] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Avatar image
  const avatarUrl = 'https://i.ibb.co/XxpSPp9y/Chat-GPT-Image-31-de-out-de-2025-15-51-29-11zon.webp';
  const chatButtonImage = 'https://i.ibb.co/XxpSPp9y/Chat-GPT-Image-31-de-out-de-2025-15-51-29-11zon.webp';
  const whatsappNumber = '351934459441';

  useEffect(() => {
    if (isOpen && currentStep === 'greeting' && messages.length === 0) {
      // Initialize chat with greeting when opened for the first time
      const greetingMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        text: 'Olá! Sou o assistente da Greenelite. Como posso ajudá-lo hoje? Qual é o seu nome?',
        timestamp: new Date()
      };
      setMessages([greetingMessage]);
      setCurrentStep('name');
    }
  }, [isOpen, currentStep, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, currentStep]);

  // Detect when user scrolls to "Fale agora" section
  useEffect(() => {
    const section = document.getElementById('fale-agora-section');
    
    console.log('[ChatWidget] Checking for section:', {
      sectionExists: !!section,
      hasShownScrollMessage,
      sectionId: section?.id
    });
    
    if (!section) {
      console.log('[ChatWidget] Section "fale-agora-section" not found. Will retry...');
      // Retry after a delay if section doesn't exist yet (page might still be loading)
      const retryTimer = setTimeout(() => {
        const retrySection = document.getElementById('fale-agora-section');
        if (retrySection) {
          console.log('[ChatWidget] Section found on retry!');
        }
      }, 1000);
      return () => clearTimeout(retryTimer);
    }
    
    if (hasShownScrollMessage) {
      console.log('[ChatWidget] Message already shown, skipping observer setup');
      return;
    }

    console.log('[ChatWidget] Setting up Intersection Observer');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('[ChatWidget] Intersection Observer triggered:', {
            isIntersecting: entry.isIntersecting,
            intersectionRatio: entry.intersectionRatio,
            threshold: 0.2
          });
          
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            console.log('[ChatWidget] Section is visible! Will show notification...');
            
            // Show notification balloon outside the chat
            setShowNotification(true);
            setHasShownScrollMessage(true);
            
            // Auto-hide notification after 5 seconds
            setTimeout(() => {
              setShowNotification(false);
            }, 5000);
            
            console.log('[ChatWidget] Notification shown');
            
            observer.disconnect();
            console.log('[ChatWidget] Observer disconnected');
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of section is visible (more sensitive)
        rootMargin: '-50px' // Start checking a bit before section enters viewport
      }
    );

    observer.observe(section);
    console.log('[ChatWidget] Observer attached to section');

    return () => {
      observer.disconnect();
      console.log('[ChatWidget] Cleanup: Observer disconnected');
    };
  }, [hasShownScrollMessage]);

  const validateTelefone = (telefone: string): boolean => {
    // Remove espaços, hífens e parênteses
    const cleaned = telefone.replace(/[\s\-\(\)]/g, '');
    // Verifica se tem pelo menos 9 dígitos (formato português)
    return /^[\d\+]{9,15}$/.test(cleaned);
  };

  const addBotMessage = (text: string) => {
    const botMessage: Message = {
      id: Date.now().toString(),
      type: 'bot',
      text,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, botMessage]);
  };

  const addUserMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const trimmedValue = inputValue.trim();
    addUserMessage(trimmedValue);

    // Process based on current step
    switch (currentStep) {
      case 'name':
        setUserData(prev => ({ ...prev, name: trimmedValue }));
        setInputValue('');
        addBotMessage(`Prazer em conhecê-lo, ${trimmedValue}! Qual é o seu telemóvel?`);
        setCurrentStep('telefone');
        break;

      case 'telefone':
        if (!validateTelefone(trimmedValue)) {
          setInputValue('');
          addBotMessage('Por favor, insira um número de telemóvel válido. Exemplo: +351 934 459 441 ou 934459441');
          return;
        }
        setUserData(prev => ({ ...prev, telefone: trimmedValue }));
        setInputValue('');
        addBotMessage('Obrigado! Qual serviço está interessado ou como podemos ajudá-lo?');
        setCurrentStep('service');
        break;

      case 'service':
        setUserData(prev => ({ ...prev, service: trimmedValue }));
        setInputValue('');
        setIsSending(true);
        // Simular um pequeno delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSending(false);
        addBotMessage('Obrigado pelas informações! Em breve entraremos em contacto para dar seguimento ao seu pedido. Obrigado por escolher a Greenelite!');
        setCurrentStep('complete');
        break;
    }
  };


  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const resetChat = () => {
    setMessages([]);
    setCurrentStep('greeting');
    setUserData({
      name: '',
      telefone: '',
      service: ''
    });
    setInputValue('');
    setHasShownScrollMessage(false); // Reset to allow message to appear again in new conversation
    setShowNotification(false); // Hide notification when resetting
  };

  const toggleChat = () => {
    if (isOpen) {
      // If closing, reset if conversation is complete
      if (currentStep === 'complete') {
        resetChat();
      }
      setIsOpen(false);
    } else {
      // If opening, check if we need to reset
      if (currentStep === 'complete' || messages.length === 0) {
        resetChat();
      }
      setIsOpen(true);
    }
  };

  return (
    <>
      {/* Floating Chat Button with Pulsing Effect */}
      <div className="fixed bottom-28 right-6 z-50 w-16 h-16">
        {/* Multiple pulsing rings for better effect */}
        {!isOpen && (
          <>
            <div className="absolute inset-0 rounded-full animate-ping-ring" style={{ animationDelay: '0s' }}>
              <div className="w-full h-full rounded-full bg-blue-400 border-2 border-blue-500"></div>
            </div>
            <div className="absolute inset-0 rounded-full animate-ping-ring" style={{ animationDelay: '0.7s' }}>
              <div className="w-full h-full rounded-full bg-blue-400 border-2 border-blue-500"></div>
            </div>
          </>
        )}
        
        {/* Pulsing glow layer */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full animate-pulse-glow -z-10">
            <div className="w-full h-full rounded-full bg-blue-400"></div>
          </div>
        )}
        
        {!isOpen && (
          <button
            onClick={toggleChat}
            className="relative w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform overflow-hidden scale-100 hover:scale-110 bg-[#B8860B] shadow-[#B8860B]/50"
            aria-label="Abrir chat"
          >
            <img
              src={chatButtonImage}
              alt="Chat"
              className="w-full h-full object-cover rounded-full relative z-10"
            />
          </button>
        )}
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
        aria-label="Contatar via WhatsApp"
      >
        <i className="ri-whatsapp-line text-3xl text-white"></i>
      </a>

      {/* Notification Balloon - Appears when user scrolls to "Fale agora" section */}
      {showNotification && (
        <div className="fixed bottom-44 right-6 z-50 max-w-xs animate-fade-in">
          <div className="bg-white rounded-lg shadow-2xl p-4 border border-gray-200 relative">
            {/* Close button */}
            <button
              onClick={() => setShowNotification(false)}
              className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
              aria-label="Fechar notificação"
            >
              <i className="ri-close-line text-sm text-gray-600"></i>
            </button>
            
            {/* Message content */}
            <div className="flex items-start gap-3 pr-6">
              <img
                src={avatarUrl}
                alt="Atendente"
                className="w-10 h-10 rounded-full border-2 border-[#B8860B] object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800 mb-1">Atendente</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Vi que você chegou até aqui! 😊 Se precisar de alguma ajuda ou tiver dúvidas, estou à sua disposição!
                </p>
              </div>
            </div>
            
            {/* Arrow pointing down to chat button */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white shadow-lg"></div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Window */}
      <div
        className={`fixed bottom-28 right-6 z-40 w-80 max-w-[calc(100vw-3rem)] h-[400px] max-h-[400px] bg-white rounded-lg shadow-2xl flex flex-col transition-all duration-300 transform ${
          isOpen
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        {/* Chat Header with Avatar and Close Button */}
        <div className="bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white p-4 rounded-t-lg flex items-center gap-3 relative">
          <button
            onClick={toggleChat}
            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors opacity-60 hover:opacity-100"
            aria-label="Fechar chat"
          >
            <i className="ri-close-line text-sm text-white"></i>
          </button>
          <img
            src={avatarUrl}
            alt="Atendente"
            className="w-12 h-12 rounded-full border-2 border-white object-cover"
          />
          <div className="flex-1 pr-8">
            <h3 className="font-semibold text-lg">Atendente</h3>
            <p className="text-xs text-[#F4E4BC]">Online agora</p>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.type === 'user'
                    ? 'bg-[#B8860B] text-white rounded-br-none'
                    : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-[#F4E4BC]' : 'text-gray-400'}`}>
                  {message.timestamp.toLocaleTimeString('pt-PT', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          ))}
          {isSending && (
            <div className="flex justify-start">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                  <span className="text-xs text-gray-500">Enviando...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
          {currentStep !== 'complete' ? (
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                disabled={isSending}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isSending}
                className="px-4 py-2 bg-[#B8860B] text-white rounded-lg hover:bg-[#8B6914] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <i className="ri-send-plane-fill text-lg"></i>
              </button>
            </div>
          ) : (
            <div className="text-center py-2">
              <button
                onClick={resetChat}
                className="text-[#B8860B] hover:text-[#8B6914] text-sm font-medium"
              >
                Iniciar nova conversa
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatWidget;

