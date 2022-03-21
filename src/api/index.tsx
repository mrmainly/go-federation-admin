class Api {
    _url: string;
    _headers: Record<string, string>;

    constructor(url: string, headers: Record<string, string>) {
        this._url = url
        this._headers = headers
    }

    checkResponse(res: Response) {
        console.log('RESPONSE', res);

        return new Promise((resolve, reject) => {
            if (res.status === 204) {
                return resolve(res)
            }
            const func = res.status < 400 ? resolve : reject
            res.json().then(data => func(data))
        })
    }

    getPosts() {
        return fetch(
            this._url + '/api/v1/blog/posts',
            {
                method: 'GET',
                headers: this._headers,
            }
        ).then(this.checkResponse)
    }

    getPost(id: number) {
        return fetch(
            this._url + `/api/v1/blog/posts/${id}`,
            {
                method: 'GET',
                headers: this._headers,
            }
        ).then(this.checkResponse)
    }

    getProfiles() {
        const token = 'b729f91892343987a7a75adb866f66db0f75dcbd'
        return fetch(
            this._url + '/api/v1/profiles/',
            {
                method: 'GET',
                headers: {
                    ...this._headers,
                    'authorization': `Token ${token}`
                }
            }
        ).then(this.checkResponse)
    }

    createTournaments(data: object) {
        const token = localStorage.getItem('token')
        return fetch(
            this._url + `/api/v1/tournaments/create`,
            {
                method: 'POST',
                headers: {
                    ...this._headers,
                    'authorization': `Token ${token}`
                },
                body: JSON.stringify(data)
            }
        ).then(this.checkResponse)
    }
    //
    getMenu() {
        return fetch(
            this._url + '/api/v1/blog/menu',
            {
                method: 'GET',
                headers: this._headers,
            }
        ).then(this.checkResponse)
    }

    getUser(id: number) {
        // const token = localStorage.getItem('token')
        return fetch(
            this._url + `/api/v1/profiles/${id}`,
            {
                method: 'GET',
                headers: {
                    ...this._headers,
                    // 'authorization': `Token ${token}`
                }
            }
        ).then(this.checkResponse)
    }
    // USER
    getUserData() {
        const token = localStorage.getItem('token')
        return fetch(
            this._url + `/api/v1/users/self`,
            {
                method: 'GET',
                headers: {
                    ...this._headers,
                    'authorization': `Token ${token}`
                }
            }
        ).then(this.checkResponse)
    }

    // PLAYERS
    getPlayers() {
        return fetch(
            this._url + `/api/v1/profiles/`,
            {
                method: 'GET',
                headers: {
                    ...this._headers,
                }
            }
        ).then(this.checkResponse)
    }

    // OTHER
    getSlider() {
        return fetch(
            this._url + `/api/v1/blog/slider`,
            {
                method: 'GET',
                headers: {
                    ...this._headers,
                }
            }
        ).then(this.checkResponse)
    }

    //FORUM
    getForum() {
        return fetch(
            this._url + `/api/v1/forum/`,
            {
                method: 'GET',
                headers: {
                    ...this._headers,
                }
            }
        ).then(this.checkResponse)
    }
}

const defaultHost = process.env.REACT_APP_API_KEY || 'https://federation.goykt.ru'

const defaultHeaders = {
    'content-type': 'application/json',
}

export default new Api(defaultHost, defaultHeaders);