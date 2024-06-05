

const EnvCheck = () => {
    return (
        <div>
            <p>API Key: {import.meta.env.VITE_apiKey}</p>
            <p>Auth Domain: {import.meta.env.VITE_authDomain}</p>
            <p>Project ID: {import.meta.env.VITE_projectId}</p>
            <p>Storage Bucket: {import.meta.env.VITE_storageBucket}</p>
            <p>Messaging Sender ID: {import.meta.env.VITE_messagingSenderId}</p>
            <p>App ID: {import.meta.env.VITE_appId}</p>

        </div>
    );
};

export default EnvCheck;