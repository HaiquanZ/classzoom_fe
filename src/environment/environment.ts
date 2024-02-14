export const environment = {
    server: {
        apiUrl: 'http://192.168.1.38:4000/api/v1',
    },
    path: {
        auth: {
            LOGIN: '/user/login',
            REGISTER: '/user/register'
        },
        group: {
            GET_ALL_GROUPS: '/group',
            CREATE_GROUP: '/group/create',
            DELETE_GROUP: '/group',
            ADD_MEMBER: '/group/member'
        },
        assignment: {
            
        }
    }
};
