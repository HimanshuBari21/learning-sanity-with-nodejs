export default {
    name: 'nav',
    title: 'Navbar',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'pages',
            title: 'Pages',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        { type: 'TShirt' }
                    ]
                }
            ]
        }
    ],
}