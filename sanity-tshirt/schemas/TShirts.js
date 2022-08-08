export default {
		name: 'TShirt',
		type: 'document',
			title: 'Tshirts',
		fields: [
			{
				name: 'name',
				type: 'string',
				title: 'Name'
			},
			{
				name: 'price',
				type: 'number',
				title: 'Price'
			},
			{
				name: 'img',
				type: 'image',
				title: 'Image'
			},
			{
				name: 'cotton',
				type: 'boolean',
				title: '100% Cotton'
			},
			{
				name: 'location',
				type: 'geopoint',
				title: 'Location of Seller',
			},
			{
				name: 'desc',
				type: 'array',
				title: 'Description',
				of: [
				  {
					type: 'block'
				  }
				]
			  }
		]
	}