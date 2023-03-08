// export const schemaTypes = []


export const schemaTypes = [ 


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
//    {
//     name: 'transaction',
//     title: 'Transaction',
//     type: 'document',
//     fields: [
//         {
//             name: 'name',
//             title: 'Name',
//             type: 'string'
//         },
//         {
//             name: 'TransactionReference',
//             title: 'transaction_reference',
//             type: 'slug',
//             options: {
//                 source: 'name',
//                 maxLength: 100,
//             }
//         },
//         {
//             name: 'price',
//             title: 'Price',
//             type: 'number',
//         },
//         {
//             name: 'details',
//             title: 'Details',
//             type: 'string',
//         },
//         // This can be success, pending or failed
//         {
//             title: 'Transaction Status',
//             name: 'TransactionStatus',
//             type: 'string',
//         },{
//             title: 'timestamp',
//             name: 'timestamp',
//             type: 'datetime',
//             options: {
//                 dateFormat: 'YYYY-MM-DD',
//                 timeFormat: 'HH:mm',
//                 timeStep: 15,
//                 calendarTodayLabel: 'Today'
//               }
//           }

]
