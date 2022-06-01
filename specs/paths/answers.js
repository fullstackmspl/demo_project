module.exports = [
  {
    url: '/create',
    post: {
      summary: 'create',
      description: 'create',
      parameters: [
        {
          in: 'body',
          name: 'body',
          description: 'Model of answer creation',
          required: true,
          schema: {
            $ref: '#/definitions/createAnswer',
          },
        },
      ],
      responses: {
        default: {
          description: 'Unexpected error',
          schema: {
            $ref: '#/definitions/Error',
          },
        },
      },
    },
  },
  {
    url: '/getAll',
    get: {
      summary: 'get all answers',
      description: 'get all answers',
      parameters: [
        // {
        //   in: 'body',
        //   name: 'body',
        //   description: 'Model of user get all answers',
        //   required: true,
        //   schema: {
        //     $ref: '#/definitions/login',
        //   },
        // },
      ],
      responses: {
        default: {
          description: 'Unexpected error',
          schema: {
            $ref: '#/definitions/Error',
          },
        },
      },
    },
  },
];
