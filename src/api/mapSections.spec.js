import {
	mapSectionTwoColumns,
	mapSectionContent,
	mapSections,
	mapTextGrid,
	mapImageGrid,
} from './mapSections';

describe('Map sections', () => {
	it('should render predefined section if no data is provided', () => {
		const data = mapSections();
		expect(data).toEqual([]);
	});

	it('should map section content', () => {
		const data = mapSectionContent({
			__component: 'section.section-content',
			title: 'news coverage and some surprises',
			metadata: {
				background: false,
				section_id: 'intro',
			},
			content:
				'<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.</p><p>We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.</p><p>We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.</p>',
		});

		expect(data).toEqual({
			background: false,
			component: 'section.section-content',
			html: '<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.</p><p>We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.</p><p>We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.</p>',
			sectionId: 'intro',
			title: 'news coverage and some surprises',
		});
	});

	it('shoud map section text grid', () => {
		const data = mapTextGrid({
			__component: 'section.section-grid',
			_id: '60df303eb90cfa3918d450aa',
			title: 'My grid.',
			description:
				'Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
			metadata: {
				background: false,
				section_id: 'grid',
			},
			text_grid: [
				{
					_id: '60df303eb90cfa3918d450ab',
					title: 'Teste 1',
					description:
						'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
					__v: 0,
					id: '60df303eb90cfa3918d450ab',
				},
				{
					_id: '60df303eb90cfa3918d450ac',
					description:
						'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
					title: 'Teste 2',
					__v: 0,
					id: '60df303eb90cfa3918d450ac',
				},
				{
					_id: '60df303eb90cfa3918d450ad',
					description:
						'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
					title: 'Teste 3',
					__v: 0,
					id: '60df303eb90cfa3918d450ad',
				},
			],
		});

		expect(data).toEqual(
			expect.objectContaining({
				component: 'section.section-grid-text',
				title: 'My grid.',
				description:
					'Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
				hasBackground: false,
				sectionId: 'grid',
				grid: [
					{
						_id: '60df303eb90cfa3918d450ab',
						title: 'Teste 1',
						description:
							'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
						__v: 0,
						id: '60df303eb90cfa3918d450ab',
					},
					{
						_id: '60df303eb90cfa3918d450ac',
						description:
							'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
						title: 'Teste 2',
						__v: 0,
						id: '60df303eb90cfa3918d450ac',
					},
					{
						_id: '60df303eb90cfa3918d450ad',
						description:
							'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
						title: 'Teste 3',
						__v: 0,
						id: '60df303eb90cfa3918d450ad',
					},
				],
			}),
		);
	});

	it('shoud map section image grid', () => {
		const data = mapImageGrid({
			__component: 'section.section-grid',
			_id: '60df5a0fb90cfa3918d450bf',
			title: 'Gallery',
			description:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias',
			text_grid: [],
			image_grid: [
				{
					_id: '60df5a0fb90cfa3918d450c0',
					__v: 0,
					image: {
						_id: '60df5d3ab90cfa3918d450d5',
						name: 'https://images.unsplash.com/photo-1511894395104-279931d816da?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixid=MnwxfDB8MXxyYW5kb218MHx8cnx8fHx8fDE2MjUyNTA2MDM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
						alternativeText: 'Museu',
						caption: 'Museu',
						hash: 'photo_1511894395104_279931d816da_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mj_Uy_NTA_2_MDM_and_ixlib_rb_1_2_34dcd9f19a',
						ext: '.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
						mime: 'image/jpeg',
						size: 12.14,
						width: 360,
						height: 360,
						url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251128/photo_1511894395104_279931d816da_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mj_Uy_NTA_2_MDM_and_ixlib_rb_1_2_34dcd9f19a.jpg',
						provider_metadata: {
							public_id:
								'photo_1511894395104_279931d816da_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mj_Uy_NTA_2_MDM_and_ixlib_rb_1_2_34dcd9f19a',
							resource_type: 'image',
						},
						formats: {
							thumbnail: {
								name: 'thumbnail_https://images.unsplash.com/photo-1511894395104-279931d816da?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixid=MnwxfDB8MXxyYW5kb218MHx8cnx8fHx8fDE2MjUyNTA2MDM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
								hash: 'thumbnail_photo_1511894395104_279931d816da_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mj_Uy_NTA_2_MDM_and_ixlib_rb_1_2_34dcd9f19a',
								ext: '.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
								mime: 'image/jpeg',
								width: 156,
								height: 156,
								size: 3.88,
								path: null,
								url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251129/thumbnail_photo_1511894395104_279931d816da_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mj_Uy_NTA_2_MDM_and_ixlib_rb_1_2_34dcd9f19a.jpg',
								provider_metadata: {
									public_id:
										'thumbnail_photo_1511894395104_279931d816da_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mj_Uy_NTA_2_MDM_and_ixlib_rb_1_2_34dcd9f19a',
									resource_type: 'image',
								},
							},
						},
						provider: 'cloudinary',
						related: ['60df5a0fb90cfa3918d450c0'],
						createdAt: '2021-07-02T18:38:50.318Z',
						updatedAt: '2021-07-02T18:44:12.051Z',
						__v: 0,
						id: '60df5d3ab90cfa3918d450d5',
					},
					id: '60df5a0fb90cfa3918d450c0',
				},
				{
					_id: '60df5e7bb90cfa3918d450e3',
					__v: 0,
					image: {
						_id: '60df5d3cb90cfa3918d450da',
						name: 'https://images.unsplash.com/photo-1617289755070-3590b660a06e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=794&q=80',
						alternativeText:
							'Computador Com o Finn e Jake do desenho de hora de aventura',
						caption:
							'Computador Com o Finn e Jake do desenho de hora de aventura',
						hash: 'photo_1617289755070_3590b660a06e_ixid_Mnwx_Mj_A3f_DB_8_M_Hxwa_G90by1w_Y_Wdlf_Hx8f_G_Vuf_DB_8f_Hx8_and_ixlib_rb_1_2_1677bf1c2b',
						ext: '.1&auto=format&fit=crop&w=794&q=80',
						mime: 'image/jpeg',
						size: 77.85,
						width: 794,
						height: 805,
						url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251128/photo_1617289755070_3590b660a06e_ixid_Mnwx_Mj_A3f_DB_8_M_Hxwa_G90by1w_Y_Wdlf_Hx8f_G_Vuf_DB_8f_Hx8_and_ixlib_rb_1_2_1677bf1c2b.jpg',
						provider_metadata: {
							public_id:
								'photo_1617289755070_3590b660a06e_ixid_Mnwx_Mj_A3f_DB_8_M_Hxwa_G90by1w_Y_Wdlf_Hx8f_G_Vuf_DB_8f_Hx8_and_ixlib_rb_1_2_1677bf1c2b',
							resource_type: 'image',
						},
						formats: {
							thumbnail: {
								name: 'thumbnail_https://images.unsplash.com/photo-1617289755070-3590b660a06e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=794&q=80',
								hash: 'thumbnail_photo_1617289755070_3590b660a06e_ixid_Mnwx_Mj_A3f_DB_8_M_Hxwa_G90by1w_Y_Wdlf_Hx8f_G_Vuf_DB_8f_Hx8_and_ixlib_rb_1_2_1677bf1c2b',
								ext: '.1&auto=format&fit=crop&w=794&q=80',
								mime: 'image/jpeg',
								width: 154,
								height: 156,
								size: 6,
								path: null,
								url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251129/thumbnail_photo_1617289755070_3590b660a06e_ixid_Mnwx_Mj_A3f_DB_8_M_Hxwa_G90by1w_Y_Wdlf_Hx8f_G_Vuf_DB_8f_Hx8_and_ixlib_rb_1_2_1677bf1c2b.jpg',
								provider_metadata: {
									public_id:
										'thumbnail_photo_1617289755070_3590b660a06e_ixid_Mnwx_Mj_A3f_DB_8_M_Hxwa_G90by1w_Y_Wdlf_Hx8f_G_Vuf_DB_8f_Hx8_and_ixlib_rb_1_2_1677bf1c2b',
									resource_type: 'image',
								},
							},
							medium: {
								name: 'medium_https://images.unsplash.com/photo-1617289755070-3590b660a06e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=794&q=80',
								hash: 'medium_photo_1617289755070_3590b660a06e_ixid_Mnwx_Mj_A3f_DB_8_M_Hxwa_G90by1w_Y_Wdlf_Hx8f_G_Vuf_DB_8f_Hx8_and_ixlib_rb_1_2_1677bf1c2b',
								ext: '.1&auto=format&fit=crop&w=794&q=80',
								mime: 'image/jpeg',
								width: 740,
								height: 750,
								size: 69.37,
								path: null,
								url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251130/medium_photo_1617289755070_3590b660a06e_ixid_Mnwx_Mj_A3f_DB_8_M_Hxwa_G90by1w_Y_Wdlf_Hx8f_G_Vuf_DB_8f_Hx8_and_ixlib_rb_1_2_1677bf1c2b.jpg',
								provider_metadata: {
									public_id:
										'medium_photo_1617289755070_3590b660a06e_ixid_Mnwx_Mj_A3f_DB_8_M_Hxwa_G90by1w_Y_Wdlf_Hx8f_G_Vuf_DB_8f_Hx8_and_ixlib_rb_1_2_1677bf1c2b',
									resource_type: 'image',
								},
							},
							small: {
								name: 'small_https://images.unsplash.com/photo-1617289755070-3590b660a06e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=794&q=80',
								hash: 'small_photo_1617289755070_3590b660a06e_ixid_Mnwx_Mj_A3f_DB_8_M_Hxwa_G90by1w_Y_Wdlf_Hx8f_G_Vuf_DB_8f_Hx8_and_ixlib_rb_1_2_1677bf1c2b',
								ext: '.1&auto=format&fit=crop&w=794&q=80',
								mime: 'image/jpeg',
								width: 493,
								height: 500,
								size: 37.24,
								path: null,
								url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251131/small_photo_1617289755070_3590b660a06e_ixid_Mnwx_Mj_A3f_DB_8_M_Hxwa_G90by1w_Y_Wdlf_Hx8f_G_Vuf_DB_8f_Hx8_and_ixlib_rb_1_2_1677bf1c2b.jpg',
								provider_metadata: {
									public_id:
										'small_photo_1617289755070_3590b660a06e_ixid_Mnwx_Mj_A3f_DB_8_M_Hxwa_G90by1w_Y_Wdlf_Hx8f_G_Vuf_DB_8f_Hx8_and_ixlib_rb_1_2_1677bf1c2b',
									resource_type: 'image',
								},
							},
						},
						provider: 'cloudinary',
						related: ['60df5e7bb90cfa3918d450e3'],
						createdAt: '2021-07-02T18:38:52.611Z',
						updatedAt: '2021-07-02T18:44:11.857Z',
						__v: 0,
						id: '60df5d3cb90cfa3918d450da',
					},
					id: '60df5e7bb90cfa3918d450e3',
				},
				{
					_id: '60df5e7bb90cfa3918d450e4',
					__v: 0,
					image: {
						_id: '60df5d3ab90cfa3918d450d7',
						name: 'http://source.unsplash.com/random/360x360?r=69',
						alternativeText: 'Cidade com o céu cinza',
						caption: 'Cidade com o céu cinza',
						hash: '360x360_r_69_108b97b57c',
						ext: '',
						mime: 'image/jpeg',
						size: 22.97,
						width: 360,
						height: 360,
						url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251128/360x360_r_69_108b97b57c.jpg',
						provider_metadata: {
							public_id: '360x360_r_69_108b97b57c',
							resource_type: 'image',
						},
						formats: {
							thumbnail: {
								name: 'thumbnail_http://source.unsplash.com/random/360x360?r=69',
								hash: 'thumbnail_360x360_r_69_108b97b57c',
								ext: '',
								mime: 'image/jpeg',
								width: 156,
								height: 156,
								size: 5.26,
								path: null,
								url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251129/thumbnail_360x360_r_69_108b97b57c.jpg',
								provider_metadata: {
									public_id: 'thumbnail_360x360_r_69_108b97b57c',
									resource_type: 'image',
								},
							},
						},
						provider: 'cloudinary',
						related: ['60df5e7bb90cfa3918d450e4'],
						createdAt: '2021-07-02T18:38:50.469Z',
						updatedAt: '2021-07-02T18:44:11.863Z',
						__v: 0,
						id: '60df5d3ab90cfa3918d450d7',
					},
					id: '60df5e7bb90cfa3918d450e4',
				},
				{
					_id: '60df5e7bb90cfa3918d450e5',
					__v: 0,
					image: {
						_id: '60df5d3ab90cfa3918d450d8',
						name: 'http://source.unsplash.com/random/360x360?r=200',
						alternativeText:
							'Homem na praia com prancha de surf durante o inverno',
						caption: 'Homem na praia com prancha de surf durante o inverno',
						hash: '360x360_r_200_afb2ddace7',
						ext: '',
						mime: 'image/jpeg',
						size: 16.95,
						width: 360,
						height: 360,
						url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251128/360x360_r_200_afb2ddace7.jpg',
						provider_metadata: {
							public_id: '360x360_r_200_afb2ddace7',
							resource_type: 'image',
						},
						formats: {
							thumbnail: {
								name: 'thumbnail_http://source.unsplash.com/random/360x360?r=200',
								hash: 'thumbnail_360x360_r_200_afb2ddace7',
								ext: '',
								mime: 'image/jpeg',
								width: 156,
								height: 156,
								size: 4.27,
								path: null,
								url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251129/thumbnail_360x360_r_200_afb2ddace7.jpg',
								provider_metadata: {
									public_id: 'thumbnail_360x360_r_200_afb2ddace7',
									resource_type: 'image',
								},
							},
						},
						provider: 'cloudinary',
						related: ['60df5e7bb90cfa3918d450e5'],
						createdAt: '2021-07-02T18:38:50.538Z',
						updatedAt: '2021-07-02T18:44:11.894Z',
						__v: 0,
						id: '60df5d3ab90cfa3918d450d8',
					},
					id: '60df5e7bb90cfa3918d450e5',
				},
				{
					_id: '60df5e7bb90cfa3918d450e6',
					__v: 0,
					image: {
						_id: '60df5d3ab90cfa3918d450d9',
						name: 'http://source.unsplash.com/random/360x360?r=1000',
						alternativeText: 'Um monte de tijolos',
						caption: 'Um monte de tijolos',
						hash: '360x360_r_1000_266635dd38',
						ext: '',
						mime: 'image/jpeg',
						size: 23.23,
						width: 360,
						height: 360,
						url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251128/360x360_r_1000_266635dd38.jpg',
						provider_metadata: {
							public_id: '360x360_r_1000_266635dd38',
							resource_type: 'image',
						},
						formats: {
							thumbnail: {
								name: 'thumbnail_http://source.unsplash.com/random/360x360?r=1000',
								hash: 'thumbnail_360x360_r_1000_266635dd38',
								ext: '',
								mime: 'image/jpeg',
								width: 156,
								height: 156,
								size: 4.71,
								path: null,
								url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251129/thumbnail_360x360_r_1000_266635dd38.jpg',
								provider_metadata: {
									public_id: 'thumbnail_360x360_r_1000_266635dd38',
									resource_type: 'image',
								},
							},
						},
						provider: 'cloudinary',
						related: ['60df5e7bb90cfa3918d450e6'],
						createdAt: '2021-07-02T18:38:50.608Z',
						updatedAt: '2021-07-02T18:44:11.901Z',
						__v: 0,
						id: '60df5d3ab90cfa3918d450d9',
					},
					id: '60df5e7bb90cfa3918d450e6',
				},
				{
					_id: '60df5e7bb90cfa3918d450e7',
					__v: 0,
					image: {
						_id: '60df5d3ab90cfa3918d450d6',
						name: 'http://source.unsplash.com/random/360x360?r=20',
						alternativeText: 'Arvore',
						caption: 'Arvore',
						hash: '360x360_r_20_4824c6c1a0',
						ext: '',
						mime: 'image/jpeg',
						size: 18.19,
						width: 360,
						height: 360,
						url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251128/360x360_r_20_4824c6c1a0.jpg',
						provider_metadata: {
							public_id: '360x360_r_20_4824c6c1a0',
							resource_type: 'image',
						},
						formats: {
							thumbnail: {
								name: 'thumbnail_http://source.unsplash.com/random/360x360?r=20',
								hash: 'thumbnail_360x360_r_20_4824c6c1a0',
								ext: '',
								mime: 'image/jpeg',
								width: 156,
								height: 156,
								size: 4.89,
								path: null,
								url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251129/thumbnail_360x360_r_20_4824c6c1a0.jpg',
								provider_metadata: {
									public_id: 'thumbnail_360x360_r_20_4824c6c1a0',
									resource_type: 'image',
								},
							},
						},
						provider: 'cloudinary',
						related: ['60df5e7bb90cfa3918d450e7'],
						createdAt: '2021-07-02T18:38:50.340Z',
						updatedAt: '2021-07-02T18:44:11.907Z',
						__v: 0,
						id: '60df5d3ab90cfa3918d450d6',
					},
					id: '60df5e7bb90cfa3918d450e7',
				},
			],
			metadata: {
				background: false,
				_id: '60df5a10b90cfa3918d450c2',
				name: 'gallery',
				section_id: 'gallery',
				__v: 0,
				id: '60df5a10b90cfa3918d450c2',
			},
			__v: 2,
			id: '60df5a0fb90cfa3918d450bf',
		});

		expect(data).toEqual(
			expect.objectContaining({
				component: 'section.section-grid-image',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias',
				grid: [
					{
						altText: 'Museu',
						src: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251128/photo_1511894395104_279931d816da_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mj_Uy_NTA_2_MDM_and_ixlib_rb_1_2_34dcd9f19a.jpg',
					},
					{
						altText:
							'Computador Com o Finn e Jake do desenho de hora de aventura',
						src: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251128/photo_1617289755070_3590b660a06e_ixid_Mnwx_Mj_A3f_DB_8_M_Hxwa_G90by1w_Y_Wdlf_Hx8f_G_Vuf_DB_8f_Hx8_and_ixlib_rb_1_2_1677bf1c2b.jpg',
					},
					{
						altText: 'Cidade com o céu cinza',
						src: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251128/360x360_r_69_108b97b57c.jpg',
					},
					{
						altText: 'Homem na praia com prancha de surf durante o inverno',
						src: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251128/360x360_r_200_afb2ddace7.jpg',
					},
					{
						altText: 'Um monte de tijolos',
						src: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251128/360x360_r_1000_266635dd38.jpg',
					},
					{
						altText: 'Arvore',
						src: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251128/360x360_r_20_4824c6c1a0.jpg',
					},
				],
				hasBackground: false,
				sectionId: 'gallery',
				title: 'Gallery',
			}),
		);
	});

	it('should map sections two columns', () => {
		const data = mapSectionTwoColumns({
			__component: 'section.section-two-columns',
			_id: '60df5e7ab90cfa3918d450dd',
			metadata: {
				background: true,
				_id: '60df5e7ab90cfa3918d450e2',
				__v: 0,
				name: 'contact',
				section_id: 'contact',
				id: '60df5e7ab90cfa3918d450e2',
			},
			__v: 1,
			description:
				'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.',
			title: 'January brings us Firefox 85',
			image: {
				_id: '60df2dd7b90cfa3918d45076',
				name: 'javascript.svg',
				alternativeText: 'Pessoas segurando logos do HTML, CSS e Javascript',
				caption: 'Pessoas segurando logos do HTML, CSS e Javascript',
				hash: 'javascript_b9d280e07f',
				ext: '.svg',
				mime: 'image/svgxml',
				size: 30.31,
				url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625238996/javascript_b9d280e07f.svg',
				provider_metadata: {
					public_id: 'javascript_b9d280e07f',
					resource_type: 'image',
				},
				provider: 'cloudinary',
				width: 1030,
				height: 730,
				related: ['60df2f78b90cfa3918d45086', '60df5e7ab90cfa3918d450dd'],
				createdAt: '2021-07-02T15:16:39.322Z',
				updatedAt: '2021-07-02T18:46:09.640Z',
				__v: 0,
				id: '60df2dd7b90cfa3918d45076',
			},
			id: '60df5e7ab90cfa3918d450dd',
		});

		expect(data).toEqual({
			background: true,
			component: 'section.section-two-columns',
			description:
				'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.',
			image: {
				alternativeText: 'Pessoas segurando logos do HTML, CSS e Javascript',
				url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625238996/javascript_b9d280e07f.svg',
			},
			sectionId: 'contact',
			title: 'January brings us Firefox 85',
		});
	});
});
