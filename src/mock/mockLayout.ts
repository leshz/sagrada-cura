export const mock = {
  data: {
    id: 1,
    attributes: {
      createdAt: '2024-01-23T02:45:12.709Z',
      updatedAt: '2024-01-23T02:45:29.003Z',
      publishedAt: '2024-01-23T02:45:28.601Z',
      locale: 'es',
      top: {
        id: 1,
        phone: '3132905754',
        title: 'bienvenidos a nuestra **tienda**',
        socialLink: [
          {
            id: 1,
            link: 'https://www.facebook.com/?locale=es_LA',
            icon: true,
            text: 'fb'
          },
          {
            id: 2,
            link: 'https://www.instagram.com/',
            icon: true,
            text: 'ig'
          }
        ]
      },
      menu: {
        id: 1,
        cart: true,
        icon: {
          data: null
        },
        Home: {
          id: 3,
          link: '/',
          icon: false,
          text: 'home'
        },
        nuestraMarca: {
          id: 4,
          link: '/nuestra-marca',
          icon: false,
          text: 'nuestra marca'
        },
        Productos: [
          {
            id: 5,
            link: '/productos',
            icon: false,
            text: 'nuestros productos'
          },
          {
            id: 6,
            link: '/shop',
            icon: false,
            text: 'tienda'
          }
        ]
      },
      footer: {
        id: 1,
        NewsletterTitle: 'Join Our Newsletter & Get 30% Off?',
        description: {
          id: 1,
          footerTitle: 'Payment Gateway',
          description:
            'Sed vitae elementum elit. Ut sed maur id sem ultricies ultricies.  Secured Payment Gateways'
        },
        Column: [
          {
            id: 1,
            Title: 'Support',
            column: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: '',
                    type: 'text'
                  },
                  {
                    url: 'https://www.google.com',
                    type: 'link',
                    children: [
                      {
                        text: 'Help & Contact Us',
                        type: 'text'
                      }
                    ]
                  },
                  {
                    text: '',
                    type: 'text'
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  },
  meta: {}
}
