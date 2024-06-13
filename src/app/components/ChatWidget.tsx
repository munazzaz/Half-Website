// "use client";

// import { useState, useEffect, useRef } from 'react';
// // import { db } from '../../firebaseConfig';
// import { collection, addDoc, query, where, getDocs, updateDoc, arrayUnion, doc, onSnapshot, orderBy, limit, serverTimestamp, setDoc } from 'firebase/firestore';
// import Image from 'next/image';
// // import DOMPurify from 'dompurify';
// import LiveChatIcon from "@/../public/images/chatIcon.png";
// import TonyWoodsImage from '@/../public/images/tonyWoods.png'; // Import the header image
// import SendArrow from "@/../public/images/sendArrow.png";

// interface User {
//  name: string;
//  email: string;
// }

// interface Message {
//  name: string;
//  email: string;
//  message: string;
//  timestamp: string;
//  sender?: string;
// }

// const ChatWidget = () => {
//  const [isOpen, setIsOpen] = useState(true);
//  const [name, setName] = useState('');
//  const [email, setEmail] = useState('');
//  const [message, setMessage] = useState('');
//  const [chatStarted, setChatStarted] = useState(false);
//  const [messages, setMessages] = useState<Message[]>([]);
//  const [loading, setLoading] = useState(false);
//  const [userDocId, setUserDocId] = useState<string | null>(null);
//  const [nameError, setNameError] = useState<string | null>(null);
//  const [emailError, setEmailError] = useState<string | null>(null);
//  const [messageError, setMessageError] = useState<string | null>(null);
//  const messagesEndRef = useRef<HTMLDivElement | null>(null);

//  useEffect(() => {
//  if (userDocId) {
//  const unsubscribe = onSnapshot(doc(db, 'messages', userDocId), (doc) => {
//  if (doc.exists()) {
//  const updatedMessages = doc.data()?.messages || [];
//  setMessages(updatedMessages);
//  }
//  });

//  return () => unsubscribe();
//  }
//  }, [userDocId]);

//  const fetchChatHistory = async (email: string) => {
//  const q = query(collection(db, 'messages'), where('email', '==', email));
//  const querySnapshot = await getDocs(q);
//  if (!querySnapshot.empty) {
//  const docData = querySnapshot.docs[0].data();
//  const chatHistory: Message[] = docData.messages;
//  setUserDocId(querySnapshot.docs[0].id);
//  setMessages(chatHistory);
//  }
//  };

//  const getNextUserId = async () => {
//  const q = query(collection(db, 'users'), orderBy('userId', 'desc'), limit(1));
//  const querySnapshot = await getDocs(q);
//  if (!querySnapshot.empty) {
//  const lastUserId = querySnapshot.docs[0].data().userId;
//  return lastUserId + 1;
//  } else {
//  return 1;
//  }
//  };

//  const handleStartChat = async () => {
//  let isValid = true;
//  setNameError(null);
//  setEmailError(null);

//  const sanitizedEmail = DOMPurify.sanitize(email);
//  const sanitizedName = DOMPurify.sanitize(name);

//  if (!sanitizedName) {
//  setNameError("Name is required");
//  isValid = false;
//  } else if (sanitizedName.length < 1 || sanitizedName.length > 25) {
//  setNameError("Name must be between 1 and 25 characters");
//  isValid = false;
//  }

//  if (!sanitizedEmail) {
//  setEmailError("Email is required");
//  isValid = false;
//  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(sanitizedEmail)) {
//  setEmailError("Invalid email format");
//  isValid = false;
//  } else if (sanitizedEmail.length < 1 || sanitizedEmail.length > 25) {
//  setEmailError("Email must be between 1 and 25 characters");
//  isValid = false;
//  }

//  if (!isValid) return;

//  setLoading(true);
//  const userQuery = query(collection(db, 'users'), where('email', '==', sanitizedEmail));
//  const userQuerySnapshot = await getDocs(userQuery);

//  let userId;
//  if (userQuerySnapshot.empty) {
//  userId = await getNextUserId();
//  const userDocRef = doc(collection(db, 'users'), `user${userId}`);
//  await setDoc(userDocRef, {
//  name: sanitizedName,
//  email: sanitizedEmail,
//  userId,
//  timestamp: serverTimestamp(),
//  });
//  } else {
//  userId = userQuerySnapshot.docs[0].data().userId;
//  }

//  await fetchChatHistory(sanitizedEmail);

//  if (userQuerySnapshot.empty) {
//  const docRef = await addDoc(collection(db, 'messages'), { email: sanitizedEmail, messages: [] });
//  setUserDocId(docRef.id);
//  }

//  setChatStarted(true);
//  setLoading(false);
//  };

//  const handleSendMessage = async () => {
//  setMessageError(null);

//  const sanitizedMessage = DOMPurify.sanitize(message);

//  if (sanitizedMessage.length < 1 || sanitizedMessage.length > 380) {
//  setMessageError("Message must be between 1 and 380 characters");
//  return;
//  }

//  const newMessage: Message = {
//  name,
//  email,
//  message: sanitizedMessage,
//  timestamp: new Date().toLocaleString(),
//  };

//  if (userDocId) {
//  const userDocRef = doc(db, 'messages', userDocId);
//  await updateDoc(userDocRef, {
//  messages: arrayUnion(newMessage)
//  });
//  setMessages([...messages, newMessage]);
//  setMessage('');
//  }
//  };

//  useEffect(() => {
//  if (messagesEndRef.current) {
//  messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//  }
//  }, [messages]);

//  return (
//  <div className="fixed bottom-4 roboto right-4 z-50">
//  <button onClick={() => setIsOpen(!isOpen)} className="text-white">
//  <Image src={LiveChatIcon} alt="Live chat icon" className='h-[70px] bg-white w-[70px]' />
//  </button>
//  {isOpen && (
//  <div className="fixed bottom-0 right-0 bg-white rounded-lg shadow-lg liveChat:w-[27rem] h-[78%] my-20 mx-5 flex flex-col scale-in">
//  <div className="flex items-center px-4 py-5 bg-blue-600 text-white rounded-t-lg">
//  <Image src={TonyWoodsImage} alt="Tony woods image" className="h-14 w-14 rounded-full mr-2" />
//  <div>
//  <div className="text-[16px]/[1.18]">Chat with</div>
//  <div className="font-semibold text-[19px] liveChat:text-[23px]">Tony</div>
//  </div>
//  </div>
//  {!chatStarted ? (
//  <div className="flex-grow overflow-y-auto py-4 px-4 my-4 rounded-lg mx-2 liveChat:mx-4 border-2">
//  <h2 className="text-[18px] liveChat:text-[21px] mb-4 mt-4">Welcome to our <span className='font-bold text-blue-600'>LiveChat!</span> please fill the form below before start chatting.</h2>
//  <label className='text-xl font-bold ' htmlFor="text">Full Name <span className='text-red-600'>*</span></label>
//  <input
//  type="text"
//  placeholder="Name"
//  value={name}
//  onChange={(e) => setName(e.target.value)}
//  className="w-full text-[18px] focus:border-gray-500 focus:outline-none focus:ring-0 mt-1 p-2 h-12 mb-2 border rounded"
//  />
// {nameError && <p className="text-red-500 mb-2 text-sm">{nameError}</p>}

// <label className='text-xl font-bold' htmlFor="email">Email <span className='text-red-600'>*</span></label>

// <input

// type="email"

// placeholder="Email"

// value={email}

// onChange={(e) => setEmail(e.target.value)}

// className="w-full text-[18px] border focus:border-gray-500 focus:outline-none focus:ring-0 mt-1 p-2 h-12 mb-4 rounded"

// />

// {emailError && <p className="text-red-500 mb-2 text-sm">{emailError}</p>}

// <button onClick={handleStartChat} className="bg-blue-500 h-12 text-white font-normal text-[20px] p-2 rounded w-full" disabled={loading}>

// {loading ? <div className='loader'></div> : 'Start the chat'}

// </button>

// </div>

// ) : (

// <>

// <div className="flex-grow overflow-y-auto mb-2 p-2">

// {messages.map((msg, index) => (

// <div key={index} className="mb-6 px-2">



// {msg.name === "Tony Woods"? (

// <div className='flex'>

// <Image src={TonyWoodsImage} alt="Tony woods image" className="w-8 h-8 a14:h-10 a14:w-10 rounded-full mr-2" />

// <div className='shadow-92xl border rounded-xl py-2 px-4 max-w-72'>

// <p className='text-[14px] a14:text-base font-normal'>{msg.message}</p> <span className="text-gray-500 text-xs">{msg.timestamp}</span>

// </div>



// </div>



// ) :(



// <div className=' flex flex-row-reverse text-white text-[14px] a14:text-base font-normal '>

// <div className='bg-blue-600 py-2 px-4 rounded-xl max-w-72'>

// <p>{msg.message}</p> <span className="text-gray-100 text-xs">{msg.timestamp}</span>

// </div>

// <div ref={messagesEndRef}></div>

// </div>

// )

// }

// </div>

// ))}

// </div>

// <div className='flex px-2 border rounded-xl shadow-92xl mx-3 mb-6 '>

// <input

// type="text"

// placeholder="Type your message..."

// value={message}

// onChange={(e) => setMessage(e.target.value)}

// className="w-full px-2 py-3 text-[19px] focus:outline-none focus:ring-0 "

// />

// {messageError && <p className="text-red-500 text-sm">{messageError}</p>}

// <button onClick={handleSendMessage} className="px-2" disabled={!message}>

// <Image src={SendArrow} alt="Send arrow" className='w-7 h-7'/>

// </button>

// </div>



// </>

// )}

// </div>

// )}

// </div>

// );

// };



// export default ChatWidget;
