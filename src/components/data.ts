const USER_API_URL = `${import.meta.env.VITE_APP_MOCK_USER_API_URL}`;
const USER_DETAIL_API_URL = `${import.meta.env.VITE_APP_MOCK_USER_DETAIL_URL}`;

export const fetchData = async () => { 
    try {
        const res = await fetch(USER_API_URL);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        return {data, error: null}
        
    } catch (error: any) {
        console.error(error);
        return {data: null, error: error.message}
    }

}

export const fetchUserDetail = async () => {
    try {
        const res = await fetch(USER_DETAIL_API_URL);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json()
        // console.log('The data is: ', data);
        //store user data to local storage for retrieval
        localStorage.setItem('userDetails', JSON.stringify(data))
    } catch (error) {
        console.error(error);
        console.log('Error getting user details' + error);
        
    }
}

export const userHead: string[] = ['organization', 'username', 'email', 'phone number', 'date joined', 'status']

export const userDetailsNav: string[] = ['general details', 'documents', 'bank details', 'loans', 'savings', 'app and system']
