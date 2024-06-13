// "use client"
// // src/app/components/ChatComponent.tsx

// import axios from 'axios';
// import { useState } from 'react';

// const ChatComponent = () => {
//   const [ip, setIp] = useState<string | null>(null);
//   const [name, setName] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [location, setLocation] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const startChat = async () => {
//     try {
//       const ipResponse = await axios.get('https://api.ipify.org?format=json');
//       const userIp = ipResponse.data.ip;
//       setIp(userIp);

//       const response = await axios.post('/api/chat', { ip: userIp, name, email });
//       console.log('Server response:', response.data);
//       setLocation(response.data.location);
//     } catch (error) {
//       console.error('Error starting chat:', error);
//       setError('Error starting chat');
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Start Chat</h1>
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         className="border p-2 mb-2 w-full"
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="border p-2 mb-4 w-full"
//       />
//       <button onClick={startChat} className="bg-blue-500 text-white py-2 px-4 rounded">
//         Start Chat
//       </button>
//       {location && <p className="mt-4">User Location: {location}</p>}
//       {error && <p className="mt-4 text-red-500">{error}</p>}
//     </div>
//   );
// };

// export default ChatComponent;
