export default {
    name: 'nav2',
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
            type: 'reference',
            to: [{type: 'TShirt'}]
        }
    ],
}