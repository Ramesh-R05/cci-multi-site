import navigation from '../modules/navigation';
import hamburgerNavigation from '../modules/hamburgerNavigation';

export default {
    entity: {
        id: 'GT-2127',
        title: 'Automation Test Recipe Long Title',
        shortTitle: 'Automation Test Recipe Short Title',
        body: [
            {
                type: 'paragraph',
                label: 'Paragraph',
                content:
                    'Automation Test Recipe Body Paragraph 1 Automation Test Recipe Body Paragraph 1 Automation Test Recipe Body Paragraph 1 Automation Test Recipe Body Paragraph 1 Automation Test Recipe Body Paragraph 1 Automation Test Recipe Body Paragraph 1 Automation Test Recipe Body Paragraph 1'
            },
            {
                type: 'heading',
                label: 'Heading',
                content: 'Automation Test Recipe Body Heading'
            },
            {
                type: 'paragraph',
                label: 'Paragraph',
                content:
                    'Automation Test Recipe Body Paragraph 2 Automation Test Recipe Body Paragraph 2 Automation Test Recipe Body Paragraph 2 Automation Test Recipe Body Paragraph 2 Automation Test Recipe Body Paragraph 2 Automation Test Recipe Body Paragraph 2 Automation Test Recipe Body Paragraph 2 Automation Test Recipe Body Paragraph 2 Automation Test Recipe Body Paragraph 2 Automation Test Recipe Body Paragraph 2 Automation Test Recipe Body Paragraph 2 Automation Test Recipe Body Paragraph 2'
            },
            {
                type: 'related-content',
                label: 'Related Content',
                content: [
                    {
                        id: 'AWWFOOD-9891',
                        url: '/recipes/beef-bourguignon-9891',
                        name: 'Beef bourguignon',
                        level: 5,
                        title: 'Beef bourguignon',
                        pathIds: ['AWWFOOD--1', 'AWWFOOD-1159', 'AWWFOOD-1191', 'AWWFOOD-8103', 'AWWFOOD-9647', 'AWWFOOD-9891'],
                        siteUrl: 'http://awwfood-site-au.sit.bxm.net.au',
                        summary: 'So much more than just a beef stew, boeuf à la Bourguignonne, is a traditional French recipe.',
                        urlName: 'beef-bourguignon',
                        imageUrl:
                            'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2015/03/20/da926457533148d19d9864e60c35d6c2/beef-bourguignon.jpg',
                        nodeType: 'Recipe',
                        parentId: 'AWWFOOD-9647',
                        siteCode: '3556e173-c5c2-4bd9-afca-974feea3461e',
                        siteName: 'awwfood',
                        typeName: 'RecipeTeaserDto',
                        parentUrl: '/recipes',
                        sortOrder: 243,
                        parentName: 'Recipes',
                        cookingTime:
                            '{\r\n  "total": 180,\r\n  "times": [\r\n    {\r\n      "id": "preparation",\r\n      "label": "",\r\n      "minutes": 0,\r\n      "quantity": 0\r\n    },\r\n    {\r\n      "id": "cooking",\r\n      "label": "",\r\n      "minutes": 180,\r\n      "quantity": 180\r\n    },\r\n    {\r\n      "id": "marinating",\r\n      "label": "",\r\n      "minutes": 0,\r\n      "quantity": 0\r\n    }\r\n  ]\r\n}',
                        dateIndexed: '2018-08-28T09:06:19',
                        imageAltText: 'beef bourguignon',
                        nodeTypeAliasPath: ['Page', 'Editorial', 'Recipe']
                    },
                    {
                        id: 'AWWFOOD-9856',
                        url: '/recipes/beef-casserole-9856',
                        name: 'Beef casserole',
                        level: 5,
                        title: 'Beef casserole',
                        pathIds: ['AWWFOOD--1', 'AWWFOOD-1159', 'AWWFOOD-1191', 'AWWFOOD-8103', 'AWWFOOD-9647', 'AWWFOOD-9856'],
                        siteUrl: 'http://awwfood-site-au.sit.bxm.net.au',
                        urlName: 'beef-casserole',
                        imageUrl:
                            'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2015/03/18/d94b01880bfe4fc7b9216d74653c0918/family-beef-casserole.jpg',
                        nodeType: 'Recipe',
                        parentId: 'AWWFOOD-9647',
                        siteCode: '3556e173-c5c2-4bd9-afca-974feea3461e',
                        siteName: 'awwfood',
                        typeName: 'RecipeTeaserDto',
                        parentUrl: '/recipes',
                        sortOrder: 208,
                        parentName: 'Recipes',
                        cookingTime:
                            '{\r\n  "total": 140,\r\n  "times": [\r\n    {\r\n      "id": "preparation",\r\n      "label": "",\r\n      "minutes": 0,\r\n      "quantity": 0\r\n    },\r\n    {\r\n      "id": "cooking",\r\n      "label": "",\r\n      "minutes": 140,\r\n      "quantity": 140\r\n    },\r\n    {\r\n      "id": "marinating",\r\n      "label": "",\r\n      "minutes": 0,\r\n      "quantity": 0\r\n    }\r\n  ]\r\n}',
                        dateIndexed: '2018-08-28T09:05:22',
                        imageAltText: 'FAMILY BEEF CASSEROLE',
                        nodeTypeAliasPath: ['Page', 'Editorial', 'Recipe']
                    }
                ]
            }
        ],
        dateCreated: '2018-02-16T04:44:04.00Z',
        dateModified: '2018-02-16T04:48:00.961Z',
        imageAltText: 'Automation Test Recipe Image Alt Text',
        imageCaption: 'Automation Test Recipe Image Caption',
        imageFacebookUrl: {
            tags: [],
            source: '',
            credits: []
        },
        imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/12/19/51741/Tuna-web.jpg',
        campaign: [
            {
                id: 'NOW-31873',
                url: '/aquatest',
                name: 'Aquatest',
                level: 3,
                title: 'Aquatest',
                endDate: '4/29/2025 12:00:00 AM',
                pathIds: ['NOW--1', 'NOW-1159', 'NOW-31872', 'NOW-31873'],
                siteUrl: 'http://now-site-au.sit.bxm.net.au',
                sponsor: 'Aquatest',
                summary: 'Aquatest',
                urlName: 'aquatest',
                nodeType: 'Campaign',
                parentId: 'NOW-31872',
                redirect: {
                    mode: 2
                },
                siteCode: '8507aea9-5ac4-4831-90e5-f567f9a3c63a',
                siteName: 'now',
                typeName: 'CampaignTeaserDto',
                parentUrl: '/',
                startDate: '11/01/2016 12:00:00 AM',
                parentName: 'Now To Love 738',
                dateIndexed: '2017-06-23T15:33:41',
                campaignType: 'Native',
                summaryTitle: 'Aquatest',
                nodeTypeAliasPath: ['Page', 'Editorial', 'Articles', 'Campaign']
            }
        ],
        nodeType: 'Recipe',
        summary: 'Automation Test Recipe Short Teaser',
        url: '/recipes/healthy-recipes/automation-test-recipe-2127',
        parentName: 'Healthy Recipes',
        parentUrl: '/recipes/healthy-recipes',
        siteName: 'gt',
        siteUrl: 'http://gt-site-au.sit.bxm.net.au',
        tagsDetails: [
            {
                name: 'food:Main ingredient:Vegetables:Cucumber',
                urlName: 'cucumber',
                fullName: 'food_Main_ingredient_Vegetables_Cucumber',
                displayName: 'Cucumber'
            },
            {
                name: 'food:Main ingredient:Vegetables:Potato',
                urlName: 'potato',
                fullName: 'food_Main_ingredient_Vegetables_Potato',
                displayName: 'Potato'
            }
        ],
        recipeCookingTime: {
            times: [
                {
                    id: 'preparation',
                    label: 'label of preparation time',
                    minutes: 10,
                    quantity: '10'
                },
                {
                    id: 'cooking',
                    label: 'label of cooking time',
                    minutes: 20,
                    quantity: '20'
                },
                {
                    id: 'marinating',
                    label: 'label of marinating time',
                    minutes: 10,
                    quantity: '10'
                }
            ],
            total: 30
        },
        recipeCookingMethod: [
            {
                heading: '',
                methods: [
                    {
                        method:
                            'For dill cucumbers, toss cucumbers and 2 tsp fine salt in a bowl to coat evenly and transfer to a colander to drain (15 minutes). Rinse, then pat dry with paper towels. Stir vinegar and sugar until sugar dissolves, add to cucumbers along with dill and season to taste with freshly ground pepper. Pack cucumbers into a sterile jar or container, pour in vinegar mixture to cover completely and refrigerate for at least a day before using. Cucumbers will keep refrigerated for 2 weeks.'
                    }
                ]
            },
            {
                heading: '',
                methods: [
                    {
                        method:
                            'For potato salad, cover potatoes with cold salted water in a saucepan, bring to the boil and cook until starting to crumble on the edges (15-20 minutes). Drain, return to pan, then add remaining ingredients, season generously and combine well. Cover and stand at room temperature if using on the same day, or refrigerate in an airtight container for up to a day (bring to room temperature before serving).'
                    }
                ]
            },
            {
                heading: '',
                methods: [
                    {
                        method:
                            'Bring tuna to room temperature (30 minutes). Heat oil in a saucepan over high heat, add tuna and sear each side until browned (1-1½ minutes each side). Remove from heat, pat dry with paper towels, then brush with mustard. Scatter herb mixture and rind on a tray, then roll tuna in herb mixture to coat evenly. Slice and serve tuna with potato salad and dill cucumbers, and scatter with extra chopped herbs.'
                    }
                ]
            }
        ],
        recipeIngredients: [
            {
                heading: '',
                ingredients: [
                    {
                        measure: 'tbsp',
                        quantity: '1',
                        ingredient: 'olive oil'
                    },
                    {
                        measure: 'kg',
                        quantity: '1.5',
                        ingredient: 'piece of sashimi-quality tuna, skin off, bloodline trimmed'
                    },
                    {
                        measure: 'cup',
                        quantity: '1',
                        ingredient: 'finely chopped mixed soft herbs (such as chervil, chives, dill and flat-leaf parsley), plus extra to serve'
                    }
                ]
            },
            {
                heading: 'Dill cucumbers',
                ingredients: [
                    {
                        measure: 'ml',
                        quantity: '100',
                        ingredient: 'brown rice vinegar'
                    },
                    {
                        measure: 'gm',
                        quantity: '30',
                        ingredient: 'caster sugar'
                    }
                ]
            }
        ],
        recipeServings: {
            serveMax: '20',
            serveMin: '10',
            yieldMeasure: 'g',
            yieldQuantity: '2'
        },
        recipeCourse: 'Main',
        recipeCuisine: 'Modern Australian',
        recipeTips: 'This is recipe tips',
        recipeOverview: ['50 mins preparation', '40 mins cooking', 'serves 2']
    },
    headerMetaData: {
        googleTagManagerEnvironment: 'sit',
        googleTagManagerMasthead: 'HB',
        robots: 'NOINDEX,NOFOLLOW',
        pageDescription: 'Automation Test Recipe Short Teaser',
        pageName: 'Automation Test Recipe',
        title: 'Automation Test Recipe Long Title'
    },
    headerNavigation: navigation.getData(),
    hamburgerNavigation: hamburgerNavigation.getData(),
    footer: {},
    mustRead: [
        {
            id: 'GT-1347',
            title: 'Quay: Restaurant Review',
            dateCreated: '2018-02-09T04:26:57.00Z',
            imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/10/24/22082/QuayRestaurant-0250.jpg',
            nodeType: 'Article',
            summary: 'Sydney - Modern Australian',
            url: '/dining-out/restaurant-reviews/quay-restaurant-review-test-1347',
            parentName: 'Restaurant Reviews',
            parentUrl: '/dining-out/restaurant-reviews'
        },
        {
            id: 'GT-1372',
            title: 'Smoke Test Article 62 Long Title',
            dateCreated: '2017-01-01T21:00:00.00Z',
            imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/whichcar/2016/04/28/-1/adjust-seat-height-driving-position.jpg',
            nodeType: 'Article',
            summary: 'Smoke Test Article 62 Short Teaser',
            url: '/travel/destination/smoke-test-article-62-1372',
            parentName: 'Destination',
            parentUrl: '/travel/destination',
            video: {
                id: '3976547520001',
                name: 'Barack Obama cheers for Team USA',
                type: 'VideoItem',
                properties: {
                    videoConfiguration: {
                        status: '',
                        videoId: '3976547520001',
                        statusCode: 200,
                        brightcoveId: '3976547520001',
                        thumbnailUrl:
                            'http://brightcove04.o.brightcove.com/761709621001/761709621001_3976551397001_th-54adcbf2e4b05c36018dfbe3-1592194024001.jpg?pubId=761709621001&videoId=3976547520001',
                        videoStillUrl:
                            'http://brightcove04.o.brightcove.com/761709621001/761709621001_3976551396001_vs-54adcbf2e4b05c36018dfbe3-1592194024001.jpg?pubId=761709621001&videoId=3976547520001'
                    }
                }
            },
            hasVideo: true,
            tagsDetails: [
                {
                    name: 'celebrities:celebrity:Kate Fisher',
                    urlName: 'kate-fisher',
                    fullName: 'celebrities_celebrity_kate_fisher',
                    displayName: 'Kate Fisher'
                },
                {
                    name: 'time:recurring_event:New York Fashion Week',
                    urlName: 'new-york-fashion-week',
                    fullName: 'time_recurringevent_new_york_fashion_week',
                    displayName: 'New York Fashion Week'
                },
                {
                    name: 'cvg:cvg_platform:iPhone',
                    urlName: 'iphone',
                    fullName: 'cvg_cvg_platform_iPhone',
                    displayName: 'iPhone'
                },
                {
                    name: 'cvg:cvg_platform:Mobile phone',
                    urlName: 'mobile-phone',
                    fullName: 'cvg_cvg_platform_Mobile_phone',
                    displayName: 'Mobile phone'
                },
                {
                    name: 'time:recurring_event:Met Gala',
                    urlName: 'met-gala',
                    fullName: 'time_recurring_event_Met_Gala',
                    displayName: 'Met Gala'
                },
                {
                    name: 'food:Skills and Techniques:Gravy, stock, sauces:Gravy',
                    urlName: 'gravy',
                    fullName: 'food_Skills_and_Techniques_Gravy_stock_sauces_Gravy',
                    displayName: 'Gravy'
                },
                {
                    name: 'people:person:Chelsy Davy',
                    urlName: 'chelsy-davy',
                    fullName: 'people_person_Chelsy_Davy',
                    displayName: 'Chelsy Davy'
                },
                {
                    name: 'celebrities:celebrity:Gisele Bundchen',
                    urlName: 'gisele-bundchen',
                    fullName: 'celebrities_celebrity_Gisele_Bundchen',
                    displayName: 'Gisele Bundchen'
                },
                {
                    name: 'food:Cuisine:Thai',
                    urlName: 'thai',
                    fullName: 'food_Cuisine_Thai',
                    displayName: 'Thai'
                }
            ]
        },
        {
            id: 'GT-1377',
            title: 'Smoke Test Article 17 Long Title',
            dateCreated: '2017-01-01T21:00:00.00Z',
            nodeType: 'Article',
            url: '/travel/destination/smoke-test-article-17-1377',
            parentName: 'Destination',
            parentUrl: '/travel/destination'
        },
        {
            id: 'GT-1652',
            title: 'Bar Rochford: Restaurant Review',
            dateCreated: '2017-10-10T23:02:00.00Z',
            imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/10/12/51129/static1.squarespace.jpg',
            nodeType: 'Review',
            summary: 'Canberra - Modern Australian cuisine',
            url: '/dining-out/restaurant-reviews/bar-rochford-restaurant-review-1652',
            parentName: 'Restaurant Reviews',
            parentUrl: '/dining-out/restaurant-reviews',
            tagsDetails: []
        }
    ],
    leftHandSide: {
        items: [
            {
                id: 'GT-2127',
                title: 'Automation Test Recipe Long Title',
                dateCreated: '2018-02-16T04:44:04.00Z',
                imageAltText: 'Automation Test Recipe Image Alt Text',
                imageCaption: 'Automation Test Recipe Image Caption',
                imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/12/19/51741/Tuna-web.jpg',
                nodeType: 'Recipe',
                summary: 'Automation Test Recipe Short Teaser',
                url: '/recipes/healthy-recipes/automation-test-recipe-2127',
                parentName: 'Healthy Recipes',
                parentUrl: '/recipes/healthy-recipes',
                tagsDetails: [
                    {
                        name: 'food:Main ingredient:Vegetables:Cucumber',
                        urlName: 'cucumber',
                        fullName: 'food_Main_ingredient_Vegetables_Cucumber',
                        displayName: 'Cucumber'
                    },
                    {
                        name: 'food:Main ingredient:Vegetables:Potato',
                        urlName: 'potato',
                        fullName: 'food_Main_ingredient_Vegetables_Potato',
                        displayName: 'Potato'
                    }
                ],
                enableAmp: 'false'
            },
            {
                id: 'GT-1663',
                title: 'Coffee culture: a history',
                dateCreated: '2018-02-15T05:39:59.00Z',
                imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/06/16/49888/Nespresso-Image.jpg',
                nodeType: 'Article',
                summary:
                    'Australia’s love affair with coffee is stronger than ever; it’s become a way of life. But exactly how did a beverage manage to shape our country’s culture?',
                url: '/lifestyle/entertaining/coffee-culture-a-history-1663',
                parentName: 'Entertaining',
                parentUrl: '/lifestyle/entertaining',
                enableAmp: 'false'
            },
            {
                id: 'GT-1662',
                title: 'Another test recipe',
                dateCreated: '2018-02-15T04:45:43.00Z',
                imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/HarpersBazaar/defaultimage.png',
                nodeType: 'Recipe',
                summary: 'Another test recipe',
                url: '/recipes/healthy-recipes/another-test-recipe-1662',
                parentName: 'Healthy Recipes',
                parentUrl: '/recipes/healthy-recipes',
                enableAmp: 'false'
            },
            {
                id: 'GT-1449',
                title: 'Test',
                dateCreated: '2018-02-14T04:09:40.00Z',
                imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/HarpersBazaar/defaultimage.png',
                nodeType: 'Article',
                url: '/header-navigation/healthy-recipes/test-recipe-1449',
                parentName: 'Healthy Recipes',
                parentUrl: '/header-navigation/healthy-recipes',
                enableAmp: 'false'
            },
            {
                id: 'GT-1446',
                title: 'Healthy chicken meal',
                dateCreated: '2018-02-14T03:57:07.00Z',
                imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/HarpersBazaar/defaultimage.png',
                nodeType: 'Recipe',
                summary: 'Healthy chicken meal',
                url: '/recipes/healthy-recipes/healthy-chicken-meal-1446',
                parentName: 'Healthy Recipes',
                parentUrl: '/recipes/healthy-recipes',
                enableAmp: 'false'
            },
            {
                id: 'GT-1347',
                title: 'Quay: Restaurant Review',
                dateCreated: '2018-02-09T04:26:57.00Z',
                imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/10/24/22082/QuayRestaurant-0250.jpg',
                nodeType: 'Article',
                summary: 'Sydney - Modern Australian',
                url: '/dining-out/restaurant-reviews/quay-restaurant-review-test-1347',
                parentName: 'Restaurant Reviews',
                parentUrl: '/dining-out/restaurant-reviews',
                enableAmp: 'false'
            },
            {
                id: 'GT-2229',
                title: 'Chicken Pasta',
                dateCreated: '2018-01-31T23:10:44.00Z',
                imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/HarpersBazaar/defaultimage.png',
                nodeType: 'Recipe',
                summary: 'Chicken Pasta Short Teaser',
                url: '/recipes/chicken-pasta-2229',
                parentName: 'Recipes',
                parentUrl: '/recipes',
                tagsDetails: [
                    {
                        name: 'food:Main ingredient:Other:Pasta',
                        urlName: 'pasta',
                        fullName: 'food_Main_ingredient_Other_Pasta',
                        displayName: 'Pasta'
                    },
                    {
                        name: 'food:Main ingredient:Meat and poultry:Chicken',
                        urlName: 'chicken',
                        fullName: 'food_Main_ingredient_Meat_and_poultry_Chicken',
                        displayName: 'Chicken'
                    }
                ],
                enableAmp: 'false'
            },
            {
                id: 'GT-2227',
                title: 'Authentic Mexico',
                dateCreated: '2018-01-31T23:05:20.00Z',
                imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/08/29/50582/Pyramid.jpg',
                nodeType: 'Gallery',
                summary:
                    'Navigate your way through authentic Mexico via Oaxaca’s bustling market stalls, traditional festival food and extraordinary Zapotec archaeological sites.',
                url: '/travel/travel-guides/authentic-mexico-2227',
                parentName: 'Travel Guides',
                parentUrl: '/travel/travel-guides'
            },
            {
                id: 'GT-1218',
                title: 'Travel tips from an architect: Kristen Whittle',
                dateCreated: '2017-12-20T02:38:54.00Z',
                imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/08/14/50371/Kristen-Whittle.jpg',
                nodeType: 'Article',
                summary:
                    'We talk to Kristen Whittle, director of Melbourne firm Bates Smart, about his travel routines and tips when travelling for work.',
                url: '/travel/travel-tips-from-kristen-whittle-1218',
                parentName: 'Travel',
                parentUrl: '/travel',
                tagsDetails: [
                    {
                        name: 'food:Dish type:Meat dish',
                        urlName: 'meat-dish',
                        fullName: 'food_Dish_type_Meat_dish',
                        displayName: 'Meat dish'
                    },
                    {
                        name: 'people:person:Matt Moran',
                        urlName: 'matt-moran',
                        fullName: 'people_person_Matt_Moran',
                        displayName: 'Matt Moran'
                    },
                    {
                        name: 'food:Cuisine:Caribbean',
                        urlName: 'caribbean',
                        fullName: 'food_Cuisine_Caribbean',
                        displayName: 'Caribbean'
                    },
                    {
                        name: 'food:Main ingredient:Vegetables:Corn',
                        urlName: 'corn',
                        fullName: 'food_Main_ingredient_Vegetables_Corn',
                        displayName: 'Corn'
                    },
                    {
                        name: 'food:Main ingredient:Other:Sugar',
                        urlName: 'sugar',
                        fullName: 'food_Main_ingredient_Other_Sugar',
                        displayName: 'Sugar'
                    },
                    {
                        name: 'food:Main ingredient:Other:Chocolate',
                        urlName: 'chocolate',
                        fullName: 'food_Main_ingredient_Other_Chocolate',
                        displayName: 'Chocolate'
                    }
                ],
                enableAmp: 'false'
            },
            {
                id: 'GT-1217',
                title: 'Local knowledge: Glasgow',
                dateCreated: '2017-12-20T02:38:32.00Z',
                imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/08/14/50372/glasgow.jpg',
                nodeType: 'Article',
                summary:
                    "Paul Simmons, co-founder and designer of acclaimed Glasgow design studio Timorous Beasties, takes us through his city, from the Hunterian Museum to where to find the city's infamous square sausage.",
                url: '/travel/local-knowledge-glasgow-1217',
                parentName: 'Travel',
                parentUrl: '/travel',
                tagsDetails: [
                    {
                        name: 'food:Occasion:Travel',
                        urlName: 'travel',
                        fullName: 'food_Occasion_Travel',
                        displayName: 'Travel'
                    },
                    {
                        name: 'location:citytown:Glasgow',
                        urlName: 'glasgow',
                        fullName: 'location_citytown_Glasgow',
                        displayName: 'Glasgow'
                    }
                ],
                enableAmp: 'false'
            },
            {
                id: 'GT-1216',
                title: 'An elegant lakeside hotel in Zurich',
                dateCreated: '2017-12-20T02:38:10.00Z',
                imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/08/16/50404/New-Lobby.jpg',
                nodeType: 'Article',
                summary:
                    'Summer in Switzerland’s largest city is all about outdoor events. Make the most of it with a room at Baur au Lac, where lake and parklands are at your doorstep.',
                url: '/travel/hot-hotels-banking-on-summer-in-zurich-1216',
                parentName: 'Travel',
                parentUrl: '/travel',
                tagsDetails: [
                    {
                        name: 'food:Season:Summer',
                        urlName: 'summer',
                        fullName: 'food_Season_Summer',
                        displayName: 'Summer'
                    },
                    {
                        name: 'food:Location and setting:Rest of World:Europe:Switzerland',
                        urlName: 'switzerland',
                        fullName: 'food_Location_and_setting_Rest_of_World_Europe_Switzerland',
                        displayName: 'Switzerland'
                    }
                ],
                enableAmp: 'false'
            },
            {
                id: 'GT-1215',
                title: 'Swimming with humpbacks on the Ningaloo Coast',
                dateCreated: '2017-12-20T02:37:46.00Z',
                imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/08/30/50364/DSC_0346.jpg',
                nodeType: 'Article',
                summary:
                    'A small operator offers intimate immersion adventures during the annual migration of humpback whales along the Western Australian coastline.',
                url: '/travel/swimming-with-humpbacks-on-the-ningaloo-coast-1215',
                parentName: 'Travel',
                parentUrl: '/travel',
                tagsDetails: [
                    {
                        name: 'food:Decorating:Colour:Pattern:Animal',
                        urlName: 'animal',
                        fullName: 'food_Decorating_Colour_Pattern_Animal',
                        displayName: 'Animal'
                    },
                    {
                        name: 'travel:Adventure travel',
                        urlName: 'adventure-travel',
                        fullName: 'travel_Adventure_travel',
                        displayName: 'Adventure travel'
                    }
                ],
                enableAmp: 'false'
            },
            {
                id: 'GT-1214',
                title: "A pro's guide to travel photography",
                dateCreated: '2017-12-20T02:36:58.00Z',
                imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/09/04/50616/TRAVEL.jpg',
                nodeType: 'Article',
                summary: "Angle, ease and simplicity; Stefan Haworth's guide to acing the travel shot.",
                url: '/travel/a-pros-guide-to-travel-photography-1214',
                parentName: 'Travel',
                parentUrl: '/travel',
                tagsDetails: [
                    {
                        name: 'visual_art:visual_art_form:Photography',
                        urlName: 'photography',
                        fullName: 'visual_art_visual_art_form_Photography',
                        displayName: 'Photography'
                    },
                    {
                        name: 'food:Occasion:Travel',
                        urlName: 'travel',
                        fullName: 'food_Occasion_Travel',
                        displayName: 'Travel'
                    }
                ],
                enableAmp: 'false'
            },
            {
                id: 'GT-1213',
                title: 'Escape to the Kimberley',
                dateCreated: '2017-12-20T02:36:31.00Z',
                imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/07/25/50157/KIM.jpg',
                nodeType: 'Article',
                summary: 'A true-blue destination, with cattle, tents and a billabong.',
                url: '/travel/escape-to-the-kimberley-1213',
                parentName: 'Travel',
                parentUrl: '/travel',
                tagsDetails: [
                    {
                        name: 'location:australian_territory:Northern Territory',
                        urlName: 'northern-territory',
                        fullName: 'location_australianterritory_northern_territory',
                        displayName: 'Northern Territory'
                    },
                    {
                        name: 'food:Occasion:Holiday',
                        urlName: 'holiday',
                        fullName: 'food_Occasion_Holiday',
                        displayName: 'Holiday'
                    }
                ],
                enableAmp: 'false'
            },
            {
                id: 'GT-1209',
                title: "Chasing Bengal tigers in India's Madhya Pradesh",
                dateCreated: '2017-12-20T02:34:47.00Z',
                imageUrl:
                    'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/08/21/50435/Zone2_Bandhavgarh_942.jpg',
                nodeType: 'Article',
                summary:
                    'On the trail of the elusive Bengal tiger in India’s Madhya Pradesh, Kendall Hill finds the search for the big cat is its own reward.',
                url: '/travel/chasing-bengal-tigers-in-indias-madhya-pradesh-1209',
                parentName: 'Travel',
                parentUrl: '/travel',
                tagsDetails: [
                    {
                        name: 'travel:Adventure travel',
                        urlName: 'adventure-travel',
                        fullName: 'travel_Adventure_travel',
                        displayName: 'Adventure travel'
                    },
                    {
                        name: 'location:country:India',
                        urlName: 'india',
                        fullName: 'location_country_India',
                        displayName: 'India'
                    }
                ],
                enableAmp: 'false'
            },
            {
                id: 'GT-1208',
                title: 'Hot Hotels: Spicers Potts Point',
                dateCreated: '2017-12-20T02:34:00.00Z',
                imageUrl:
                    'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/09/18/50411/SPICERS-Potts-Point-006.jpg',
                nodeType: 'Article',
                summary: 'Three grand Victorian terraces in Sydney’s Potts Point are transformed into the city’s newest boutique hotel.',
                url: '/travel/spicers-potts-point-sydney-1208',
                parentName: 'Travel',
                parentUrl: '/travel',
                tagsDetails: [
                    {
                        name: 'food:Building:Building style:Victorian',
                        urlName: 'victorian',
                        fullName: 'food_Building_Building_style_Victorian',
                        displayName: 'Victorian'
                    },
                    {
                        name: 'food:Location and setting:Australia:New South Wales:Sydney:Sydney inner city',
                        urlName: 'sydney-inner-city',
                        fullName: 'food_Location_and_setting_Australia_New_South_Wales_Sydney_Sydney_inner_city',
                        displayName: 'Sydney inner city'
                    }
                ],
                enableAmp: 'false'
            },
            {
                id: 'GT-1207',
                title: "The Venetian Lagoon: Venice's quieter neighbour",
                dateCreated: '2017-12-20T02:33:05.00Z',
                imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/08/21/50436/_DSC2811.jpg',
                nodeType: 'Article',
                summary:
                    'Just beyond the tourist crush of Venice, writes Josephine McKenna, the storied islands of the Venetian Lagoon are a trove of age-old traditions, architectural treasures and culinary gems all their own.',
                url: '/travel/the-venetian-lagoon-venices-quieter-neighbour-1207',
                parentName: 'Travel',
                parentUrl: '/travel',
                tagsDetails: [
                    {
                        name: 'food:Location and setting:Rest of World:Europe:Italy',
                        urlName: 'italy',
                        fullName: 'food_Location_and_setting_Rest_of_World_Europe_Italy',
                        displayName: 'Italy'
                    },
                    {
                        name: 'location:it_comune:Venice',
                        urlName: 'venice',
                        fullName: 'location_it_comune_Venice',
                        displayName: 'Venice'
                    }
                ],
                enableAmp: 'false'
            },
            {
                id: 'GT-1206',
                title: "Hiking South Australia's geographic extremes",
                dateCreated: '2017-12-20T02:32:13.00Z',
                imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/10/03/51053/GT_SA_D5_4849.jpg',
                nodeType: 'Article',
                summary:
                    'For a taste of South Australia’s extreme wilderness in extreme comfort, Helen Anderson dovetails hikes into the Flinders Ranges and along the sea cliffs of Kangaroo Island.',
                url: '/travel/hiking-south-australia-flinders-ranges-and-kangaroo-island-1206',
                parentName: 'Travel',
                parentUrl: '/travel'
            },
            {
                id: 'GT-1205',
                title: 'Welsh summer cabins inspired by myths and legends',
                dateCreated: '2017-12-20T02:31:43.00Z',
                imageUrl:
                    'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/10/05/51082/Equinox---Epic-Retreats-118.jpg',
                nodeType: 'Article',
                summary:
                    'A clutch of artfully designed pop-up pods in the Welsh countryside captures the tiny-house ethos in mythic detail, writes Larissa Dubecki.',
                url: '/travel/welsh-cabins-myths-legends-1205',
                parentName: 'Travel',
                parentUrl: '/travel'
            },
            {
                id: 'GT-1204',
                title: 'Three of the best ski lodges in Colorado',
                dateCreated: '2017-12-20T02:30:51.00Z',
                imageUrl:
                    'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/10/17/51159/b5719d276750b39abff82750f5325c13_f275.jpg',
                nodeType: 'Article',
                summary: 'Heading to the northern slopes? Here’s the pick of ski lodges in Colorado.',
                url: '/travel/three-of-the-best-ski-lodges-in-colorado-1204',
                parentName: 'Travel',
                parentUrl: '/travel',
                enableAmp: 'false'
            }
        ]
    },
    heroTeaser: {
        id: 'GT-1652',
        title: 'Bar Rochford: Restaurant Review',
        dateCreated: '2017-10-10T23:02:00.00Z',
        imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/10/12/51129/static1.squarespace.jpg',
        nodeType: 'Review',
        summary: 'Canberra - Modern Australian cuisine',
        url: '/dining-out/restaurant-reviews/bar-rochford-restaurant-review-1652',
        parentName: 'Restaurant Reviews',
        parentUrl: '/dining-out/restaurant-reviews',
        tagsDetails: []
    },
    section: {
        id: 'GT-1184',
        name: 'recipes',
        urlName: 'recipes'
    },
    promoted: {
        title: 'Latest Lamb Recipes for Australia Day',
        items: [
            {
                id: 'GT-1177',
                title: 'Hugh Wennerbom opens The Argyle Inn in Taralga',
                dateCreated: '2017-12-19T02:53:16.00Z',
                imageUrl:
                    'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/12/19/51726/web-Taralga_Dining_003-(1).jpg',
                nodeType: 'Article',
                summary:
                    'A country pub with a traditional feel and Wennerbom produce makes a weekend away from the city an even more attractive proposition.',
                url: '/restaurants/hugh-wennerbom-opens-the-argyle-inn-1177',
                parentName: 'Restaurants',
                parentUrl: '/restaurants',
                tagsDetails: [
                    {
                        name: 'food:Location and setting:Setting:Regional',
                        urlName: 'regional',
                        fullName: 'food_Location_and_setting_Setting_Regional',
                        displayName: 'Regional'
                    },
                    {
                        name: 'location:australian_state:New South Wales',
                        urlName: 'new-south-wales',
                        fullName: 'location_australian_state_New_South_Wales',
                        displayName: 'New South Wales'
                    }
                ]
            },
            {
                id: 'GT-1180',
                title: 'What to order at Barangaroo House',
                dateCreated: '2017-12-19T02:59:22.00Z',
                imageUrl:
                    'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/12/14/51668/web-Barangaroo-Prawn-bucket-bread-and-cocktail-sauce.jpg',
                nodeType: 'Article',
                summary: 'Feed your Bumble date caviar, order secret meat and more with Matt Moran’s inside guide to Barangaroo House.',
                url: '/restaurants/what-to-order-at-barangaroo-house-1180',
                parentName: 'Restaurants',
                parentUrl: '/restaurants'
            },
            {
                id: 'GT-1170',
                title: 'Authentic Mexico',
                dateCreated: '2017-12-12T23:01:41.00Z',
                imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/08/29/50582/Pyramid.jpg',
                nodeType: 'Gallery',
                summary:
                    'Navigate your way through authentic Mexico via Oaxaca’s bustling market stalls, traditional festival food and extraordinary Zapotec archaeological sites.',
                url: '/travel/authentic-mexico-1170',
                parentName: 'Travel',
                parentUrl: '/travel'
            },
            {
                id: 'GT-1183',
                title: "London's best new hotel restaurants",
                dateCreated: '2017-12-19T03:11:56.00Z',
                imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2017/12/12/51598/Nobu-Shoreditch-Bar.jpg',
                nodeType: 'Article',
                summary:
                    "London's best new restaurants now come with rooms attached. Joe Warwick charts the resurgence of the city's hotel restaurants.",
                url: '/travel/londons-best-new-hotel-restaurants-1183',
                parentName: 'Travel',
                parentUrl: '/travel'
            }
        ]
    },
    magCover: {
        id: 'GT-1658',
        url: '/modules/magcover',
        moduleName: 'magcover',
        moduleImageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/Gt/2018/01/19/1186/gt-mag.jpeg',
        pageDateCreated: '2018-02-15T03:58:07.00Z',
        headerLogoAlignment: '-1',
        moduleManualContent: {
            totalCount: 0,
            data: []
        }
    }
};
