import './style.css';

import * as htmlToImage from 'html-to-image';

document.addEventListener('DOMContentLoaded', () => {
  const hsrCharacters = {
    'Acheron': {
      avatar: '/assets/profile_avatars/acheron.webp',
      bio: "Time for Departure",
      messages: []
    },
    'Aglaea': {
      avatar: '/assets/profile_avatars/aglaea.webp',
      bio: "See you at the baths",
      messages: []
    },
    'Anaxa': {
      avatar: '/assets/profile_avatars/anaxa.webp',
      bio: "Then let me ask you",
      messages: []
    },
    'Archer': {
      avatar: '/assets/profile_avatars/archer.webp',
      bio: "AAA-rank Professional Housekeeper",
      messages: []
    },
    'Argenti': {
      avatar: '/assets/profile_avatars/argenti.webp',
      bio: "I swear to a rose",
      messages: []
    },
    'Arlan': {
      avatar: '/assets/profile_avatars/arlan.webp',
      bio: "Peppy's emergency contact",
      messages: []
    },
    'Asta': {
      avatar: '/assets/profile_avatars/asta.webp',
      bio: "I shouldn't buy any more stuff...",
      messages: []
    },
    'Aventurine': {
      avatar: '/assets/profile_avatars/aventurine.webp',
      bio: "Always open to pull for your game account",
      messages: []
    },
    'Bailu': {
      avatar: '/assets/profile_avatars/bailu.webp',
      bio: "Drink more warm water and get fewer tempers!",
      messages: []
    },
    'Black Swan': {
      avatar: '/assets/profile_avatars/blackswan.webp',
      bio: "Memories are soft amber",
      messages: []
    },
    'Blade': {
      avatar: '/assets/profile_avatars/blade.webp',
      bio: "",
      messages: []
    },
    'Boothill': {
      avatar: '/assets/profile_avatars/boothill.webp',
      bio: "Pier Point Standard Heist (LFG 3/4)",
      messages: []
    },
    'Bronya': {
      avatar: '/assets/profile_avatars/bronya.webp',
      bio: "In a meeting",
      messages: []
    },
    'Castorice': {
      avatar: '/assets/profile_avatars/castorice.webp',
      bio: "Writing as we speak",
      messages: []
    },
    'Cerydra': {
      avatar: '/assets/profile_avatars/cerydra.webp',
      bio: "For governance @Carminum @Helkolithist. Personal affairs @Gladiorum",
      messages: []
    },
    'Cipher': {
      avatar: '/assets/profile_avatars/cipher.webp',
      bio: "Show me the money!",
      messages: []
    },
    'Clara': {
      avatar: '/assets/profile_avatars/clara.webp',
      bio: "I want to go to a picnic with everyone (>▽<)",
      messages: []
    },
    'Cyrene': {
      avatar: '/assets/profile_avatars/cyrene.webp',
      bio: "Believe that romance is like the first time we met ♪",
      messages: []
    },
    'Dan Heng': {
      avatar: '/assets/profile_avatars/danheng.webp',
      bio: "For anything related to the data bank, come find me.",
      messages: []
    },
    'Dan Heng • Imbibitor Lunae': {
      avatar: '/assets/profile_avatars/danheng_imbibitorlunae.webp',
      bio: "",
      messages: []
    },
    'Dan Heng • Permansor Terrae': {
      avatar: '/assets/profile_avatars/danheng_permansorterrae.webp',
      bio: "",
      messages: []
    },
    'Dr. Ratio': {
      avatar: '/assets/profile_avatars/drratio.webp',
      bio: "\"There's no rush.\"",
      messages: []
    },
    'Evernight': {
      avatar: '/assets/profile_avatars/evernight.webp',
      bio: "██████, don't sleep too soundly tonight",
      messages: []
    },
    'Feixiao': {
      avatar: '/assets/profile_avatars/feixiao.webp',
      bio: "Itching for a fight",
      messages: []
    },
    'Firefly': {
      avatar: '/assets/profile_avatars/firefly.webp',
      bio: "I will find a dream that is mine...",
      messages: []
    },
    'Fu Xuan': {
      avatar: '/assets/profile_avatars/fuxuan.webp',
      bio: "I do not divine personal fortunes!",
      messages: []
    },
    'Fugue': {
      avatar: '/assets/profile_avatars/fugue.webp',
      bio: "",
      messages: []
    },
    'Gallagher': {
      avatar: '/assets/profile_avatars/gallagher.webp',
      bio: "Penaconian Dog",
      messages: []
    },
    'Gepard': {
      avatar: '/assets/profile_avatars/gepard.webp',
      bio: "Working, apologies for the slow response",
      messages: []
    },
    'Guinaifen': {
      avatar: '/assets/profile_avatars/guinaifen.webp',
      bio: "Not causing trouble, not fearing trouble, and no crazy challenges",
      messages: []
    },
    'Hanya': {
      avatar: '/assets/profile_avatars/hanya.webp',
      bio: "Engaging in oneiromancy, do not disturb.",
      messages: []
    },
    'Herta': {
      avatar: '/assets/profile_avatars/herta.webp',
      bio: "This account is disabled &vert; Business Contact: Asta",
      messages: []
    },
    'Himeko': {
      avatar: '/assets/profile_avatars/himeko.webp',
      bio: "I can survive without water, but coffee is my lifeblood",
      messages: []
    },
    'Hook': {
      avatar: '/assets/profile_avatars/hook.webp',
      bio: "Moles! Assemble at the Fight Club!",
      messages: []
    },
    'Huohuo': {
      avatar: '/assets/profile_avatars/huohuo.webp',
      bio: "Mr. Tail's \"Tail\"",
      messages: []
    },
    'Hyacine': {
      avatar: '/assets/profile_avatars/hyacine.webp',
      bio: "The Twilight Courtyard, always by your side~",
      messages: []
    },
    'Hysilens': {
      avatar: '/assets/profile_avatars/hysilens.webp',
      bio: "Greetings. Can you give me honey brew?",
      messages: []
    },
    'Jade': {
      avatar: '/assets/profile_avatars/jade.webp',
      bio: "You are always welcome to Bonajade Exchange.",
      messages: []
    },
    'Jiaoqiu': {
      avatar: '/assets/profile_avatars/jiaoqiu.webp',
      bio: "There's no problem that a hot pot can't fix.",
      messages: []
    },
    'Jing Yuan': {
      avatar: '/assets/profile_avatars/jingyuan.webp',
      bio: "I'm not at the Seat of Divine Foresight",
      messages: []
    },
    'Jingliu': {
      avatar: '/assets/profile_avatars/jingliu.webp',
      bio: "",
      messages: []
    },
    'Kafka': {
      avatar: '/assets/profile_avatars/kafka.webp',
      bio: "",
      messages: []
    },
    'Lingsha': {
      avatar: '/assets/profile_avatars/lingsha.webp',
      bio: "Don't get angry, don't get mad, you don't have the time to feel so bad",
      messages: []
    },
    'Luka': {
      avatar: '/assets/profile_avatars/luka.webp',
      bio: "No timely reply means I'm in training.",
      messages: []
    },
    'Luocha': {
      avatar: '/assets/profile_avatars/luocha.webp',
      bio: "A simple traveling merchant",
      messages: []
    },
    'Lynx': {
      avatar: '/assets/profile_avatars/lynx.webp',
      bio: "The user you have messaged is currently unavailable",
      messages: []
    },
    'March 7th': {
      avatar: '/assets/profile_avatars/march7th.webp',
      bio: "Today is also March 7th~",
      messages: []
    },
    'March 7th (The Hunt)': {
      avatar: '/assets/profile_avatars/march7th(thehunt).webp',
      bio: "",
      messages: []
    },
    'Misha': {
      avatar: '/assets/profile_avatars/misha.webp',
      bio: "Keep it up! The new world is just ahead!",
      messages: []
    },
    'Moze': {
      avatar: '/assets/profile_avatars/moze.webp',
      bio: "No signature.",
      messages: []
    },
    'Mydei': {
      avatar: '/assets/profile_avatars/mydei.webp',
      bio: "30% Training, 70% Diet",
      messages: []
    },
    'Natasha': {
      avatar: '/assets/profile_avatars/natasha.webp',
      bio: "Doing outpatient runs at the Robot Settlement. Check my availability before you visit",
      messages: []
    },
    'Pela': {
      avatar: '/assets/profile_avatars/pela.webp',
      bio: "Please include your name when providing information",
      messages: []
    },
    'Phainon': {
      avatar: '/assets/profile_avatars/phainon.webp',
      bio: "Praise the sun!",
      messages: []
    },
    'Qingque': {
      avatar: '/assets/profile_avatars/qingque.webp',
      bio: "Go ahead and work, just don't interrupt my game",
      messages: []
    },
    'Rappa': {
      avatar: '/assets/profile_avatars/rappa.webp',
      bio: "Heart unmoved, evil pursued",
      messages: []
    },
    'Robin': {
      avatar: '/assets/profile_avatars/robin.webp',
      bio: "Let's share our wings with one another.",
      messages: []
    },
    'Ruan Mei': {
      avatar: '/assets/profile_avatars/ruanmei.webp',
      bio: "Those are new cakes... Where did you get them?",
      messages: []
    },
    'Saber': {
      avatar: '/assets/profile_avatars/saber.webp',
      bio: "It is what it is, let's have a meal",
      messages: []
    },
    'Sampo': {
      avatar: '/assets/profile_avatars/sampo.webp',
      bio: "Certified ancient relic agent",
      messages: []
    },
    'Seele': {
      avatar: '/assets/profile_avatars/seele.webp',
      bio: "If you have anything to say, spill it!",
      messages: []
    },
    'Serval': {
      avatar: '/assets/profile_avatars/serval.webp',
      bio: "Lacking sleep and inspiration",
      messages: []
    },
    'Silver Wolf': {
      avatar: '/assets/profile_avatars/silverwolf.webp',
      bio: "Don't make a game if you don't know how to",
      messages: []
    },
    'Sparkle': {
      avatar: '/assets/profile_avatars/sparkle.webp',
      bio: "How did you find my number???",
      messages: []
    },
    'Sparxie': {
      avatar: '/assets/profile_avatars/sparxie.webp',
      bio: "If the chat gets interrupted, Sparxie will disappear!",
      messages: []
    },
    'Sunday': {
      avatar: '/assets/profile_avatars/sunday.webp',
      bio: "♪ Listening to \"Had I Not Seen the Sun\"",
      messages: []
    },
    'Sushang': {
      avatar: '/assets/profile_avatars/sushang.webp',
      bio: "What illness makes you sleepy as soon as you read a book?",
      messages: []
    },
    'The Dahlia': {
      avatar: '/assets/profile_avatars/thedahlia.webp',
      bio: "Why aren't you talking?",
      messages: []
    },
    'The Herta': {
      avatar: '/assets/profile_avatars/theherta.webp',
      bio: "It's me",
      messages: []
    },
    'Tingyun': {
      avatar: '/assets/profile_avatars/tingyun.webp',
      bio: "Let's talk it out and not fight~",
      messages: []
    },
    'Topaz & Numby': {
      avatar: '/assets/profile_avatars/topaz&numby.webp',
      bio: "Off-site~ Call if important, otherwise text",
      messages: []
    },
    'Caelus (Destruction)': {
      avatar: '/assets/profile_avatars/caelus(destruction).webp',
      bio: "Rules are made to be broken!",
      messages: []
    },
    'Caelus (Preservation)': {
      avatar: '/assets/profile_avatars/caelus(preservation).webp',
      bio: "Rules are made to be broken!",
      messages: []
    },
    'Caelus (Harmony)': {
      avatar: '/assets/profile_avatars/caelus(harmony).webp',
      bio: "Rules are made to be broken!",
      messages: []
    },
    'Caelus (Remembrance)': {
      avatar: '/assets/profile_avatars/caelus(remembrance).webp',
      bio: "Rules are made to be broken!",
      messages: []
    },
    'Stelle (Destruction)': {
      avatar: '/assets/profile_avatars/stelle(destruction).webp',
      bio: "Rules are made to be broken!",
      messages: []
    },
    'Stelle (Preservation)': {
      avatar: '/assets/profile_avatars/stelle(preservation).webp',
      bio: "Rules are made to be broken!",
      messages: []
    },
    'Stelle (Harmony)': {
      avatar: '/assets/profile_avatars/stelle(harmony).webp',
      bio: "Rules are made to be broken!",
      messages: []
    },
    'Stelle (Remembrance)': {
      avatar: '/assets/profile_avatars/stelle(remembrance).webp',
      bio: "Rules are made to be broken!",
      messages: []
    },
    'Tribbie': {
      avatar: '/assets/profile_avatars/tribbie.webp',
      bio: "Tribbie is always available~",
      messages: []
    },
    'Welt': {
      avatar: '/assets/profile_avatars/welt.webp',
      bio: "Everyone on the Express, please constantly keep in touch",
      messages: []
    },
    'Xueyi': {
      avatar: '/assets/profile_avatars/xueyi.webp',
      bio: "In seclusion. Do not disturb.",
      messages: []
    },
    'Yanqing': {
      avatar: '/assets/profile_avatars/yanqing.webp',
      bio: "Did the Artisanship Commission have new products today? No",
      messages: []
    },
    'Yao Guang': {
      avatar: '/assets/profile_avatars/yaoguang.webp',
      bio: "Victory",
      messages: []
    },
    'Yukong': {
      avatar: '/assets/profile_avatars/yukong.webp',
      bio: "I wish to take to the skies once more...",
      messages: []
    },
    'Yunli': {
      avatar: '/assets/profile_avatars/yunli.webp',
      bio: "(´・ω・`) Fight?",
      messages: []
    }
  };

  const addContactBtn = document.getElementById('add-contact-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modal = document.getElementById('add-contact-modal');
  const contactForm = document.getElementById('add-contact-form');
  const contactListContainer = document.getElementById('contact-list-container');
  const characterGridContainer = document.getElementById('character-grid-container');
  const selectedCharacterInput = document.getElementById('selected-character-name');
  
  const existingFields = document.getElementById('existing-character-fields');
  const customFields = document.getElementById('custom-character-fields');
  const radioExisting = document.getElementById('type-existing');
  const radioCustom = document.getElementById('type-custom');

  const chatPanel = document.getElementById('chat-panel');
  const chatPlaceholder = document.getElementById('chat-placeholder');
  const chatContentWrapper = document.getElementById('chat-content-wrapper');
  const chatHeaderName = document.getElementById('chat-header-name');
  const chatHeaderBio = document.getElementById('chat-header-bio');
  const chatConversation = document.getElementById('chat-conversation');
  const sendMessageForm = document.getElementById('send-message-form');
  const senderSelectBtn = document.getElementById('sender-select-btn');
  const senderModal = document.getElementById('sender-modal');
  const closeSenderModalBtn = document.getElementById('close-sender-modal-btn');
  const senderGridContainer = document.getElementById('sender-grid-container');
  const currentSenderAvatar = document.getElementById('current-sender-avatar');
  const currentSenderNameInput = document.getElementById('current-sender-name');
  const sideToggleBtn = document.getElementById('message-side-toggle');
  const sideToggleText = document.getElementById('side-toggle-text');
  const messageInput = document.getElementById('message-input');
  const mobileBackBtn = document.getElementById('mobile-back-btn');
  const exportImageBtn = document.getElementById('export-image-btn');
  const clearChatBtn = document.getElementById('clear-chat-btn');

  let activeContactName = null;

  function getDisplayName(name) {
    if (name.startsWith('Caelus')) return 'Caelus';
    if (name.startsWith('Stelle')) return 'Stelle';
    if (name.startsWith('March 7th (')) return 'March 7th';
    if (name === 'Topaz & Numby') return 'Topaz';
    return name;
  }

  function populateCharacterSelect() {
    characterGridContainer.innerHTML = "";
    
    for (const name in hsrCharacters) {
      const charData = hsrCharacters[name];
      
      const itemDiv = document.createElement('div');
      itemDiv.className = 'character-grid-item flex flex-col items-center p-2 cursor-pointer rounded-lg hover:bg-[#EAEAEA] transition-colors border-2 border-transparent group';
      itemDiv.dataset.name = name;

      const avatarImg = document.createElement('img');
      avatarImg.src = charData.avatar;
      avatarImg.alt = name;
      avatarImg.className = 'w-14 h-14 rounded-full object-cover bg-[#3A3A3A] pointer-events-none mb-2 transition-transform group-hover:scale-105';

      const nameP = document.createElement('p');
      nameP.className = 'text-xs text-center font-medium text-gray-800 pointer-events-none w-full leading-tight';
      nameP.textContent = getDisplayName(name);

      itemDiv.appendChild(avatarImg);
      itemDiv.appendChild(nameP);
      characterGridContainer.appendChild(itemDiv);
    }
  }

  function populateSenderGrid() {
    senderGridContainer.innerHTML = '';

    for (const name in hsrCharacters) {
      const charData = hsrCharacters[name];
      
      const itemDiv = document.createElement('div');
      itemDiv.className = 'sender-grid-item flex flex-col items-center p-2 cursor-pointer rounded-lg hover:bg-[#EAEAEA] transition-colors border-2 border-transparent group';
      itemDiv.dataset.name = name;
      itemDiv.dataset.avatar = charData.avatar;

      const avatarImg = document.createElement('img');
      avatarImg.src = charData.avatar;
      avatarImg.alt = name;
      avatarImg.className = 'w-14 h-14 rounded-full object-cover bg-[#3A3A3A] pointer-events-none mb-2 transition-transform group-hover:scale-105';

      const nameP = document.createElement('p');
      nameP.className = 'text-xs text-center font-medium text-gray-800 pointer-events-none w-full leading-tight';
      nameP.textContent = getDisplayName(name);

      itemDiv.appendChild(avatarImg);
      itemDiv.appendChild(nameP);
      senderGridContainer.appendChild(itemDiv);
    }
  }

  function createContactElement(name, avatarSrc) {
    const contactDiv = document.createElement('div');
    contactDiv.dataset.contactName = name;
    contactDiv.className = 'contact-item flex flex-row w-full items-center h-16 bg-[#181D3F]/60 backdrop-blur-sm border-2 border-white/30 shrink-0 justify-between px-4 cursor-pointer hover:border-white/80 transition-all duration-200';

    const innerDiv = document.createElement('div');
    innerDiv.className = 'flex flex-row items-center gap-4';

    const avatarImg = document.createElement('img');
    avatarImg.src = avatarSrc;
    avatarImg.alt = name;
    avatarImg.className = 'rounded-full w-10 h-10 bg-[#3A3A3A]';

    const nameP = document.createElement('p');
    nameP.className = 'text-[#B9BAC1] group-hover:text-black text-sm font-medium transition-colors';
    nameP.textContent = getDisplayName(name);

    const dropdownP = document.createElement('p');
    dropdownP.className = 'text-[#B9BAC1] group-hover:text-black text-sm transition-colors';
    dropdownP.textContent = '>';

    innerDiv.appendChild(avatarImg);
    innerDiv.appendChild(nameP);
    contactDiv.appendChild(innerDiv);
    contactDiv.appendChild(dropdownP);

    return contactDiv;
  }

  function createMessageElement(senderName, senderAvatar, messageText, isRight) {
    const messageContainer = document.createElement('div');
    messageContainer.className = `chat-message-container flex w-full items-start gap-2 ${isRight ? 'flex-row-reverse' : 'flex-row'}`;

    const avatarImg = document.createElement('img');
    avatarImg.src = senderAvatar;
    avatarImg.className = 'chat-avatar rounded-full w-12 h-12 bg-black';
    avatarImg.alt = senderName;

    const contentDiv = document.createElement('div');
    contentDiv.className = `chat-content flex flex-col gap-1 min-w-0 max-w-[50%] ${isRight ? 'items-end' : 'items-start'}`;

    const senderNameP = document.createElement('p');
    senderNameP.className = `chat-sender-name text-[#6C6C6C] text-sm ${isRight ? 'text-right' : 'text-left'}`;
    senderNameP.textContent = getDisplayName(senderName);

    const messageWrapperDiv = document.createElement('div');
    messageWrapperDiv.className = 'relative w-fit max-w-full';

    const shadowDiv = document.createElement('div');
    const messageTextP = document.createElement('p');

    if (isRight) {
      shadowDiv.className = 'absolute inset-0 bg-[#B6B6B5] rounded-[10px] rounded-tr-none translate-x-[1px] translate-y-[2px]';
      messageTextP.className = 'chat-message-text break-words relative bg-white rounded-[10px] rounded-tr-none p-2 px-4 text-black';
    } else {
      shadowDiv.className = 'absolute inset-0 bg-[#B6B6B5] rounded-[10px] rounded-tl-none translate-x-[-1px] translate-y-[2px]';
      messageTextP.className = 'chat-message-text break-words relative bg-white rounded-[10px] rounded-tl-none p-2 px-4';
    }
    
    messageTextP.textContent = messageText;

    messageWrapperDiv.appendChild(shadowDiv);
    messageWrapperDiv.appendChild(messageTextP);
    contentDiv.appendChild(senderNameP);
    contentDiv.appendChild(messageWrapperDiv);
    messageContainer.appendChild(avatarImg);
    messageContainer.appendChild(contentDiv);

    return messageContainer;
  }

  function updateChatPanel(contactName) {
    const contactData = hsrCharacters[contactName];
    if (!contactData) return;

    activeContactName = contactName;

    currentSenderNameInput.value = contactName;
    currentSenderAvatar.src = contactData.avatar;
    sideToggleBtn.dataset.side = 'left';
    sideToggleText.textContent = 'LEFT';

    chatHeaderName.textContent = getDisplayName(contactName);
    chatHeaderBio.textContent = contactData.bio || "";

    chatConversation.innerHTML = "";
    contactData.messages.forEach(msg => {
      const isRight = msg.isRight || false;
      const avatar = hsrCharacters[msg.sender]?.avatar || '/assets/profile_avatars/trailblazer.webp';
      const messageElement = createMessageElement(msg.sender, avatar, msg.text, isRight);
      chatConversation.appendChild(messageElement);
    });

    chatPanel.classList.remove('bg-gray-600/40');
    chatPanel.classList.add('bg-[#D8D8D9]');
    chatPlaceholder.classList.add('hidden');
    chatContentWrapper.classList.remove('hidden');
    chatContentWrapper.classList.add('flex');

    contactListContainer.classList.remove('flex');
    contactListContainer.classList.add('hidden', 'md:flex');
    
    chatPanel.classList.remove('hidden');
    chatPanel.classList.add('flex');
    
    addContactBtn.classList.remove('flex');
    addContactBtn.classList.add('hidden', 'md:flex');
  }

  function toggleFormFields() {
    if (radioExisting.checked) {
      existingFields.classList.remove('hidden');
      customFields.classList.add('hidden');
    } else {
      existingFields.classList.add('hidden');
      customFields.classList.remove('hidden');
    }
  }

  addContactBtn.addEventListener('click', () => modal.classList.remove('hidden'));
  closeModalBtn.addEventListener('click', () => modal.classList.add('hidden'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });

  radioExisting.addEventListener('change', toggleFormFields);
  radioCustom.addEventListener('change', toggleFormFields);

  if (sideToggleBtn) {
    sideToggleBtn.addEventListener('click', () => {
      const isRight = sideToggleBtn.dataset.side === 'right';
      if (isRight) {
        sideToggleBtn.dataset.side = 'left';
        sideToggleText.textContent = 'LEFT';
      } else {
        sideToggleBtn.dataset.side = 'right';
        sideToggleText.textContent = 'RIGHT';
      }
    });
  }

  if (mobileBackBtn) {
    mobileBackBtn.addEventListener('click', () => {
      chatPanel.classList.remove('flex');
      chatPanel.classList.add('hidden');

      contactListContainer.classList.remove('hidden', 'md:flex');
      contactListContainer.classList.add('flex');

      addContactBtn.classList.remove('hidden', 'md:flex');
      addContactBtn.classList.add('flex');
    });
  }

  if (clearChatBtn) {
    clearChatBtn.addEventListener('click', () => {
      if (!activeContactName) return;
      if (confirm('Are you sure you want to clear this chat?')) {
        hsrCharacters[activeContactName].messages = [];
        chatConversation.innerHTML = "";
      }
    });
  }

  if (exportImageBtn) {
    exportImageBtn.addEventListener('click', async () => {
      if (!activeContactName) return;
      
      const chatInputArea = document.getElementById('chat-input-area');
      const originalInputDisplay = chatInputArea.style.display;
      chatInputArea.style.display = 'none';

      const originalExportBtnDisplay = exportImageBtn.style.display;
      exportImageBtn.style.display = 'none';

      let originalClearBtnDisplay;
      if (clearChatBtn) {
        originalClearBtnDisplay = clearChatBtn.style.display;
        clearChatBtn.style.display = 'none';
      }
      
      const originalMobileBackDisplay = mobileBackBtn.style.display;
      if (window.innerWidth < 768) {
        mobileBackBtn.style.display = 'none';
      }

      const originalOverflow = chatConversation.style.overflow;
      const originalHeight = chatConversation.style.height;
      const originalMaxHeight = chatConversation.style.maxHeight;
      const originalFlex = chatConversation.style.flex;
      
      const chatPanelShadow = document.getElementById('chat-panel-shadow');
      const originalShadowDisplay = chatPanelShadow ? chatPanelShadow.style.display : '';

      if (chatPanelShadow) {
        chatPanelShadow.style.display = 'none';
      }

      chatConversation.style.overflow = 'visible';
      chatConversation.style.height = 'max-content';
      chatConversation.style.maxHeight = 'none';
      chatConversation.style.flex = 'none';
      
      const originalWrapperHeight = chatContentWrapper.style.height;
      const originalPanelHeight = chatPanel.style.height;
      const computedWidth = window.getComputedStyle(chatPanel).width;
      const originalPanelWidth = chatPanel.style.width;

      chatContentWrapper.style.height = 'max-content';
      chatPanel.style.height = 'max-content';
      chatPanel.style.width = computedWidth;

      try {
        const fullHeight = chatPanel.scrollHeight;
        
        const dataUrl = await htmlToImage.toPng(chatPanel, {
          backgroundColor: '#D8D8D9',
          pixelRatio: 2,
          height: fullHeight,
          style: {
            height: fullHeight + 'px',
            maxHeight: 'none',
            width: computedWidth
          }
        });

        const link = document.createElement('a');
        link.download = `hsr_chat_${activeContactName.replace(/\s+/g, '_').toLowerCase()}_${new Date().getTime()}.png`;
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error("Error generating image export:", error);
        alert("Sorry, there was an error exporting the image.");
      } finally {
        chatInputArea.style.display = originalInputDisplay;
        exportImageBtn.style.display = originalExportBtnDisplay;
        if (clearChatBtn) {
          clearChatBtn.style.display = originalClearBtnDisplay;
        }
        mobileBackBtn.style.display = originalMobileBackDisplay;
        if (chatPanelShadow) {
          chatPanelShadow.style.display = originalShadowDisplay;
        }
        chatConversation.style.overflow = originalOverflow;
        chatConversation.style.height = originalHeight;
        chatConversation.style.maxHeight = originalMaxHeight;
        chatConversation.style.flex = originalFlex;
        
        chatContentWrapper.style.height = originalWrapperHeight;
        chatPanel.style.height = originalPanelHeight;
        chatPanel.style.width = originalPanelWidth;
      }
    });
  }

  characterGridContainer.addEventListener('click', (e) => {
    const item = e.target.closest('.character-grid-item');
    if (!item) return;

    const allItems = characterGridContainer.querySelectorAll('.character-grid-item');
    allItems.forEach(el => {
      el.classList.remove('bg-[#E0E0E0]', 'border-[#C4C4C4]');
      el.classList.add('border-transparent');
    });

    item.classList.remove('border-transparent');
    item.classList.add('bg-[#E0E0E0]', 'border-[#C4C4C4]');

    selectedCharacterInput.value = item.dataset.name;
  });

  senderSelectBtn.addEventListener('click', () => senderModal.classList.remove('hidden'));
  closeSenderModalBtn.addEventListener('click', () => senderModal.classList.add('hidden'));
  senderModal.addEventListener('click', (e) => {
    if (e.target === senderModal) senderModal.classList.add('hidden');
  });

  senderGridContainer.addEventListener('click', (e) => {
    const item = e.target.closest('.sender-grid-item');
    if (!item) return;

    currentSenderNameInput.value = item.dataset.name;
    currentSenderAvatar.src = item.dataset.avatar;
    
    senderModal.classList.add('hidden');
    messageInput.focus();
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (radioExisting.checked) {
      const name = selectedCharacterInput.value;
      if (!name) {
        alert("Please select a character from the grid.");
        return;
      }
      const existingData = hsrCharacters[name];
      addContactToUI(name, existingData.avatar, existingData.bio, existingData.messages);
    } else {
      const name = document.getElementById('custom-name').value.trim();
      const bioText = document.getElementById('custom-bio').value.trim() || "A new custom contact.";
      const avatarFile = document.getElementById('custom-avatar').files[0];
      
      if (!name || !avatarFile) {
        alert('Please fill out all fields.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        addContactToUI(name, event.target.result, bioText, []);
      };
      reader.readAsDataURL(avatarFile);
    }

    function addContactToUI(name, avatar, bio, messages) {
      if (!hsrCharacters[name]) {
        hsrCharacters[name] = { avatar, bio, messages };
      }
      
      const newContact = createContactElement(name, avatar);
      contactListContainer.appendChild(newContact);
      modal.classList.add('hidden');
      contactForm.reset();
      toggleFormFields();

      selectedCharacterInput.value = "";
      const allItems = characterGridContainer.querySelectorAll('.character-grid-item');
      allItems.forEach(el => {
        el.classList.remove('bg-[#E0E0E0]', 'border-[#C4C4C4]');
        el.classList.add('border-transparent');
      });
    }
  });

  contactListContainer.addEventListener('click', (e) => {
    const contactItem = e.target.closest('.contact-item');
    if (contactItem) {
      const contactName = contactItem.dataset.contactName;
      updateChatPanel(contactName);
    }
  });

  sendMessageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!activeContactName) {
      alert("Please select a contact first.");
      return;
    }

    const sender = currentSenderNameInput.value;
    const text = messageInput.value.trim();
    const isRight = sideToggleBtn.dataset.side === 'right';

    if (!text) return;

    const avatar = currentSenderAvatar.src;

    hsrCharacters[activeContactName].messages.push({ sender, text, isRight });

    const newMessageElement = createMessageElement(sender, avatar, text, isRight);
    chatConversation.appendChild(newMessageElement);

    messageInput.value = '';
    chatConversation.scrollTop = chatConversation.scrollHeight;
  });

  function initializeApp() {
    const acheronContact = createContactElement('Acheron', hsrCharacters['Acheron'].avatar);
    
    contactListContainer.appendChild(acheronContact);
    populateCharacterSelect();
    populateSenderGrid();
  }

  initializeApp();
});
