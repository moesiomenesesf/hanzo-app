const ApiService = {

    findAllPosts: () => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json());
    },

    findCommentByPost: postId => {
        return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json());
    },

    findPostByUser: userId => {
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(res => res.json());
    },

    deletePost: postId => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {method: 'DELETE', headers: {'content-type': 'application/json'},})
            .then(res => res.json());
    },

    findAllUsers: () => {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json());
    },
}

export default ApiService;