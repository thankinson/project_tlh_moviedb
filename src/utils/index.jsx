// user controlls
const dbConnection = process.env.REACT_APP_REST_API

export const createUser = async (username, email, password, setter) => {
    try {
        const response = await fetch(`${dbConnection}user`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        });
        const data = await response.json();
        setter(data.user);
        localStorage.setItem("myToken", data.token);
    } catch (error) {
        console.log(error);
    }
};

export const login = async (username, password, setter) => {
    try {
        const response = await fetch(`${dbConnection}login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        const data = await response.json();
        setter(data.user);
        localStorage.setItem("myToken", data.token);
    } catch (error) {
        console.log(error);
    }
};

export const tokenLogin = async (setter) => {
    try {
            const response = await fetch(`${dbConnection}user`, {
                method: "GET",
                headers: {"Authorization": `Bearer ${localStorage.getItem("myToken")}`}, });
            const data = await response.json();
            setter(data.user);
    } catch (error) {
        console.log(error)
    }
};

export const deleteUser = async (user) => {
    try {
        const response = await fetch(`${dbConnection}user/username/${user}`, {
            method: "DELETE",
            headers: {"Authorization": `Bearer ${localStorage.getItem("myToken")}`}, });
            localStorage.clear();
            window.location.reload(false);
         await response.json();
    } catch (error) {
        console.log(error);
    }
};

export const logout = ({ setUser }) => {
    try {
        localStorage.clear();
        // window.location.reload(false);
        setUser();
    } catch (error) {
        console.log(error)
    }
};

export const updatePass = async (user, passUpdate) => {
    try {
        const response = await fetch(`${dbConnection}user`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("myToken")}`,
        },
            body: JSON.stringify({
                username: user,
               password: passUpdate
                })
            });
        const data = await response.JSON()
        if (!data.msg) {
            throw new Error(data.err)
        }
    } catch (error) {
        console.log()
    }
};

// movie controlls
export const addMovie = async (film) => {
    try {
        const response = await fetch(`${dbConnection}movie`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                tmdbId: film.id,
                title: film.title,
                poster: film.poster,
            }),
        });
        const data = await response.JSON()
        if (!data.msg) {
            throw new Error(data.err)
        }
    } catch (error) {
        console.log(error);
    }
};

export const listMovie = async () => {
    try {
        const response = await fetch(`${dbConnection}movie`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        })
        const data = await response.JSON()
        console.log(data)
        if (!data.msg) {
            throw new Error(data.err)
        }
    } catch (error) {
        
    }
};

export const myCollection = async () => {
    try {     
        const response = await fetch(`${dbConnection}movie`);
        const data = await response.json();
        console.log(data.allMovie)
        // setCheckMovie(data.allMovie)
        } catch(errorLog){
            console.log(errorLog);
        }

};