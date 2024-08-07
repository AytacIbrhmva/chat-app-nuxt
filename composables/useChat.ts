
export const useChat = () => {
  const selectedUsers = useState('selectedUsers', () => [])
  const allUsers = useState('allUsers', () => [])
  const messages = useState('messages', () => [])

  return { selectedUsers, allUsers, messages };
};
