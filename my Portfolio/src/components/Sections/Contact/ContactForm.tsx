import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  username: string;
  email: string;
  message: string;
  phone: string;
  messageTitle: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      username: '',
      email: '',
      message: '',
      phone: '',
      messageTitle: ''
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const onChangeEmail = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );
  const onChangePhone = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );
  const onChangeMessageTitle = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );
  const onChangeMessage = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();



      try {
        const response = await fetch('https://4kwv744pj7.execute-api.us-east-2.amazonaws.com/dev/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const responseData = await response.json();
        const nameInput = document.getElementById('username') as HTMLInputElement | null;
        const emailInput = document.getElementById('email') as HTMLInputElement | null;
        const phoneInput = document.getElementById('phone') as HTMLInputElement | null;
        const messageTitleInput = document.getElementById('messageTitle') as HTMLInputElement | null;
        const messageInput = document.getElementById('message') as HTMLInputElement | null;
        

    if ( nameInput && emailInput && phoneInput && messageTitleInput && messageInput) {
      nameInput.value = '';
      emailInput.value = '';
      phoneInput.value = '';
      messageTitleInput.value = '';
      messageInput.value = '';
    } else {
      console.error('One or both input fields not found in the DOM.');
    }

       

        console.log('Response data:', responseData);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    
      /**
       * This is a good starting point to wire up your form submission logic
       * */
      console.log('Data to send: ', data);
    },
    [data],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} id="username" name="username" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        id="email"
        onChange={onChangeEmail}
        placeholder="Email"
        required
        type="email"
      />

<input 
        autoComplete="phone"
        className={inputClasses}
        name="phone"
        id="phone"
        onChange={onChangePhone}
        placeholder="Phone"
        type="text"
      />
     
     <input
        autoComplete="messageTitle"
        className={inputClasses}
        name="messageTitle"
        id="messageTitle"
        onChange={onChangeMessageTitle}
        placeholder="Message Title"
        required
        type="text"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        id="message"
        onChange={onChangeMessage}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
