const ApiService = {

    findAllPosts: () => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {mode: 'cors'})
            .then(res => res.json());
    },

    findPostBy: postId => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {mode: 'cors'})
            .then(res => res.json());
    },

    findCommentByPost: postId => {
        return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`, {mode: 'cors'})
            .then(res => res.json());
    },

    findPostByUser: userId => {
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {mode: 'cors'})
            .then(res => res.json());
    },

    deletePost: postId => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {method: 'DELETE', mode: 'cors', headers: {'content-type': 'application/json'},})
            .then(res => res.json());
    },

    findAllUsers: () => {
        return fetch('https://jsonplaceholder.typicode.com/users', {mode: 'cors'})
            .then(res => res.json());
    },
}

export default ApiService;