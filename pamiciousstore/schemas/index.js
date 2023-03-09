// export const schemaTypes = []


export const schemaTypes = [ 

        // USER MODEL
        {
            name: 'user',
            title: 'User',
            type: 'document',
            fields: [
            {
                name: 'name',
                title: 'Name',
                type: 'string',
            },
        
            {
                name: 'email',
                title: 'Email',
                type: 'string',
            },
            {
                name: 'password',
                title: 'Password',
                type: 'string',
            },
            {
                name: 'isAdmin',
                title: 'Is Admin',
                type: 'boolean',
            },
            ],
        },



        // ORDER-ITEMS MODEL
        {
            title: 'Order Item',
            name: 'orderItem',
            type: 'object',
            fields: [
              {
                title: 'Name',
                name: 'name',
                type: 'string',
              },
              {
                title: 'quantity',
                name: 'quantity',
                type: 'number',
              },
              {
                title: 'image',
                name: 'image',
                type: 'string',
              },
              {
                title: 'price',
                name: 'price',
                type: 'number',
              },
            ],
          },



        //   ORDER MODEL
          {
            name: 'order',
            title: 'Order',
            type: 'document',
            fields: [
              {
                title: 'User',
                name: 'user',
                type: 'reference',
                to: [{ type: 'user' }],
                options: {
                  disableNew: true,
                },
              },
              {
                name: 'userName',
                title: 'User Name',
                type: 'string',
              },
              {
                name: 'itemsPrice',
                title: 'itemsPrice',
                type: 'number',
              },
              {
                name: 'shippingPrice',
                title: 'shippingPrice',
                type: 'number',
              },
              {
                name: 'taxPrice',
                title: 'taxPrice',
                type: 'number',
              },
              {
                name: 'totalPrice',
                title: 'totalPrice',
                type: 'number',
              },
              {
                name: 'paymentMethod',
                title: 'paymentMethod',
                type: 'string',
              },
              {
                title: 'shippingAddress',
                name: 'shippingAddress',
                type: 'shippingAddress',
              },
              {
                title: 'paymentResult',
                name: 'paymentResult',
                type: 'paymentResult',
              },
              {
                title: 'Order Items',
                name: 'orderItems',
                type: 'array',
                of: [
                  {
                    title: 'Order Item',
                    type: 'orderItem',
                  },
                ],
              },
              {
                title: 'IsPaid',
                name: 'isPaid',
                type: 'boolean',
              },
              {
                title: 'Paid Date',
                name: 'paidAt',
                type: 'datetime',
              },
              {
                title: 'IsDelivered',
                name: 'isDelivered',
                type: 'boolean',
              },
              {
                title: 'DeliveredAt',
                name: 'deliveredAt',
                type: 'datetime',
              },
              {
                title: 'CreatedAt',
                name: 'createdAt',
                type: 'datetime',
              },
            ],
          },


            //   BANNER MODEL
            {
            name: 'banner',
            title: 'Banner',
            type: 'document',
            fields: [
                {
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
                {
                    name: 'buttonText',
                    title: 'ButtonText',
                    type: 'string',
                },
                {
                    name: 'product',
                    title: 'Product',
                    type: 'string',
                },
                {
                    name: 'desc',
                    title: 'Desc',
                    type: 'string',
                },
                {
                    name: 'smallText',
                    title: 'SmallText',
                    type: 'string',
                },
                {
                    name: 'midText',
                    title: 'MidText',
                    type: 'string',
                },
                {
                    name: 'largeText1',
                    title: 'LargeText1',
                    type: 'string',
                },
                {
                    name: 'largeText2',
                    title: 'LargeText2',
                    type: 'string',
                },
                {
                    name: 'discount',
                    title: 'Discount',
                    type: 'string',
                },
                {
                    name: 'saleTime',
                    title: 'SaleTime',
                    type: 'string',
                },
            ],
        },


        //    PAYMENT RESULTS
        {
            title: 'paymentResult',
            name: 'paymentResult',
            type: 'object',
            fields: [
            {
                title: 'id',
                name: 'id',
                type: 'string',
            },
            {
                title: 'status',
                name: 'status',
                type: 'string',
            },
            {
                title: 'email_address',
                name: 'email_address',
                type: 'string',
            },
            ],
        },


            // SHIPPING ADDRESS
        {
            title: 'Shipping Address',
            name: 'shippingAddress',
            type: 'object',
            fields: [
            {
                title: 'fullName',
                name: 'fullName',
                type: 'string',
            },
            {
                title: 'address',
                name: 'address',
                type: 'string',
            },
            {
                title: 'city',
                name: 'city',
                type: 'string',
            },
            {
                title: 'postalCode',
                name: 'postalCode',
                type: 'string',
            },
            {
                title: 'country',
                name: 'country',
                type: 'string',
            },
            ],
        },



//    PRODUCT MODEL
   {
       name: 'product',
       title: 'Product',
       type: 'document',
       fields: [
           {
               name: 'image',
               title: 'Image',
               type: 'array',
               of: [{ type: 'image' }],
               options: {
                   hotspot: true,
               }
           },
           {
               name: 'name',
               title: 'Name',
               type: 'string'
           },
           {
               name: 'slug',
               title: 'Slug',
               type: 'slug',
               options: {
                   source: 'name',
                   maxLength: 90,
               }
           },
           {
               name: 'price',
               title: 'Price',
               type: 'number',
           },
           {
               name: 'details',
               title: 'Details',
               type: 'string',
           }
   
   
       ]
   },

]
