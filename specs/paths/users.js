module.exports = [
  // {
  //   url: '/create',
  //   post: {
  //     summary: 'create',
  //     description: 'create',
  //     parameters: [
  //       {
  //         in: 'body',
  //         name: 'body',
  //         description: 'Model of user creation',
  //         required: true,
  //         schema: {
  //           $ref: '#/definitions/userCreate',
  //         },
  //       },
  //     ],
  //     responses: {
  //       default: {
  //         description: 'Unexpected error',
  //         schema: {
  //           $ref: '#/definitions/Error',
  //         },
  //       },
  //     },
  //   },
  // },
  {
    url: '/getAll',
    get: {
      summary: 'getAll',
      description: 'getAll',
      parameters: [
        // {
        //   in: 'body',
        //   name: 'body',
        //   description: 'Model of user getAll',
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
