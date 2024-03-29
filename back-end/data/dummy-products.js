const products = [
  {
    id: 1,
    name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    description:
      'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    category: 'Jackets',
    default_price: '140',
  },
  {
    id: 2,
    name: 'Bright Future Sunglasses',
    slogan: "You've got to wear shades",
    description:
      "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    category: 'Accessories',
    default_price: '69',
  },
  {
    id: 3,
    name: 'Morning Joggers',
    slogan: 'Make yourself a morning person',
    description:
      "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    category: 'Pants',
    default_price: '40',
  },
  {
    id: 4,
    name: "Slacker's Slacks",
    slogan: 'Comfortable for everything, or nothing',
    description: "I'll tell you how great they are after I nap for a bit.",
    category: 'Pants',
    default_price: '65',
  },
  {
    id: 5,
    name: 'Heir Force Ones',
    slogan: 'A sneaker dynasty',
    description:
      "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
    category: 'Kicks',
    default_price: '99',
  },
  {
    id: 6,
    name: 'Pumped Up Kicks',
    slogan: 'Faster than a just about anything',
    description:
      'The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.',
    category: 'Kicks',
    default_price: '89',
  },
  {
    id: 7,
    name: 'Blues Suede Shoes',
    slogan: '2019 Stanley Cup Limited Edition',
    description:
      'Touch down in the land of the Delta Blues in the middle of the pouring rain',
    category: 'Dress Shoes',
    default_price: '120',
  },
  {
    id: 8,
    name: 'YEasy 350',
    slogan: 'Just jumped over jumpman',
    description:
      'These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.',
    category: 'Kicks',
    default_price: '450',
  },
  {
    id: 9,
    name: 'Summer Shoes',
    slogan: 'A risky call in the spring or fall',
    description:
      'Low-top panelled buffed leather and mesh sneakers. Sizing embroidered in black at round toe. Tonal lace-up closure. Pull-loop and rubberized style name at padded tongue. Padded collar. Pull-loop at heel collar. Logo embroidered in black at outer side. Tonal treaded rubber sole. Tonal stitching.',
    category: 'Kicks',
    default_price: '59',
  },
  {
    id: 10,
    name: 'Infinity Stone',
    slogan:
      'Reality is often disappointing. That is, it was. Now, reality can be whatever I want.',
    description:
      'The Infinity Stones are six immensely powerful stone-like objects tied to different aspects of the universe, created by the Cosmic Entities. Each of the stones possesses unique capabilities that have been enhanced and altered by various alien civilizations for millennia.',
    category: 'Accessories',
    default_price: '5000000',
  },
  {
    id: 11,
    name: 'Air Minis 250',
    slogan: 'Full court support',
    description:
      'This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.',
    category: 'Basketball Shoes',
    default_price: '0',
  },
  {
    id: 13,
    name: 'Nicole Romper',
    slogan: 'Repudiandae quo esse enim dolores qui sed voluptatem.',
    description:
      'Sed sit est et velit ut tempore nisi voluptatem. Qui ex laudantium voluptas porro. Eveniet sed quod illo. Sed numquam porro blanditiis. Illum aut nihil quo hic rerum dignissimos porro ut. Rem facere cupiditate.',
    category: 'Romper',
    default_price: '174',
  },
  {
    id: 14,
    name: 'Oma Backpack',
    slogan: 'Et hic quia adipisci et dolor aut non.',
    description:
      'Temporibus dolores omnis pariatur eos consequatur. Cupiditate quaerat reprehenderit asperiores laborum inventore aspernatur blanditiis. Modi ipsum veritatis. Est dolorum et qui. Quis quia nobis iure.',
    category: 'Backpack',
    default_price: '233',
  },
  {
    id: 15,
    name: 'Dannie Sunglasses',
    slogan: 'Quia aut nostrum et sint ipsa sunt.',
    description:
      'Velit sapiente magnam in totam ut nisi ut sed. Molestias odio officia sit incidunt. Temporibus sint accusantium rerum dolor officiis omnis omnis ipsa.',
    category: 'Sunglasses',
    default_price: '382',
  },
  {
    id: 16,
    name: 'Georgianna Shorts',
    slogan: 'Ut voluptatem enim consequatur beatae non.',
    description:
      'Dolores et ad sunt. Maxime voluptas quis illum. Illo aut repellat voluptas.',
    category: 'Shorts',
    default_price: '493',
  },
  {
    id: 17,
    name: 'The Seamus Romper',
    slogan: 'Vero laboriosam animi vero est beatae rem similique.',
    description:
      'Consequatur eos dicta ducimus earum est. A excepturi vel asperiores doloribus sit. Ullam odit sequi et molestiae. Voluptatibus odit iste sit repellat repellat similique nemo vitae.',
    category: 'Romper',
    default_price: '889',
  },
  {
    id: 18,
    name: 'Halle Heels',
    slogan: 'Quasi a ut.',
    description:
      'Minima quis facilis provident accusamus distinctio autem quia exercitationem. Quod eaque ut. Quia voluptate voluptatem incidunt amet enim. Facere autem minima qui praesentium repellat eligendi molestiae voluptatem quia. Dolores quia eos accusamus omnis illo.',
    category: 'Heels',
    default_price: '133',
  },
  {
    id: 19,
    name: 'Blanca Tank Top',
    slogan:
      'Alias sequi id voluptatem optio vero quia occaecati accusantium vel.',
    description:
      'Accusantium velit a dolorum quo eligendi eos deserunt. Repellat voluptatem porro. Inventore beatae recusandae nam dolorum. Ipsa in blanditiis eum est in sed dolorem consequatur. Asperiores atque in repellat laborum sunt dolorem.',
    category: 'Tank Top',
    default_price: '771',
  },
  {
    id: 20,
    name: 'Lukas 1000 Hoodie',
    slogan: 'Accusamus debitis laborum et qui esse unde.',
    description:
      'Voluptatem commodi pariatur laudantium. Et deleniti necessitatibus molestiae quasi sunt optio rerum. Est aperiam dolorem voluptas eaque accusantium quis neque dolores omnis. Numquam voluptas dolorem cum quo iste. Consequatur eum architecto molestias praesentium velit ut.',
    category: 'Hoodie',
    default_price: '258',
  },
  {
    id: 21,
    name: 'Alphonso 1050 Shirt',
    slogan: 'Qui est cum.',
    description:
      'Porro explicabo quis eveniet suscipit temporibus dolores aut quia. Maxime sit eaque. Reiciendis asperiores architecto dolore aut suscipit rerum occaecati deserunt. Voluptatem nostrum eum ipsum sunt voluptatibus sit sed illum. Excepturi minima sint repudiandae.',
    category: 'Shirt',
    default_price: '900',
  },
  {
    id: 22,
    name: 'Wellington Skirt',
    slogan: 'Voluptas id ea.',
    description:
      'Amet dolor sunt architecto suscipit et provident atque. Dolore qui ad temporibus repellendus nihil rem nihil. Delectus dolor reprehenderit eaque veniam. Impedit vitae sed qui ad velit. Et maiores provident in sed quia saepe perspiciatis voluptas. Ad repellendus rerum architecto.',
    category: 'Skirt',
    default_price: '923',
  },
  {
    id: 23,
    name: 'Kane Hoodie',
    slogan: 'Qui ad rem cum tenetur ipsa et.',
    description:
      'Ullam quidem corporis necessitatibus maiores dolor. Reprehenderit sit omnis ratione inventore quo rerum temporibus amet. Maxime ut a natus explicabo quaerat. Unde consequatur voluptate. Iure dolore consequatur est voluptatem. Delectus quia ea atque laborum accusamus aut qui quo eos.',
    category: 'Hoodie',
    default_price: '788',
  },
  {
    id: 24,
    name: 'Amani Tank Top',
    slogan: 'Repudiandae ut tempore dicta mollitia dolores dolore.',
    description:
      'Ut rerum labore sapiente et sunt fugiat similique dolorem a. Libero voluptas quos et voluptas repellat architecto. Fugit qui nemo omnis quia et. Eos ea rerum maxime et aliquam aliquid aliquam.',
    category: 'Tank Top',
    default_price: '725',
  },
  {
    id: 25,
    name: 'Alfreda Jacket',
    slogan: 'Quia asperiores natus vero fugiat sint error.',
    description:
      'Et voluptatem harum. Et quo odio a aspernatur. Veritatis perspiciatis ipsum autem eius velit blanditiis quia similique enim. Recusandae veniam qui maxime. Sit iste accusamus ea. Dolorum eligendi possimus omnis vitae et eveniet.',
    category: 'Jacket',
    default_price: '521',
  },
  {
    id: 26,
    name: 'Ursula Backpack',
    slogan: 'Illo et est.',
    description:
      'Vel aut alias non pariatur officiis. Culpa accusamus aut. Autem aliquid eaque illum mollitia dolorum laboriosam velit. Doloribus est quos et esse non reprehenderit omnis. Sit similique quia deleniti repellendus iure reprehenderit et.',
    category: 'Backpack',
    default_price: '995',
  },
  {
    id: 27,
    name: 'Americo Hoodie',
    slogan: 'Laboriosam ut voluptates nobis tenetur deserunt voluptatibus.',
    description:
      'Sapiente atque dolorem officia consequatur atque. Qui itaque et aspernatur rerum est voluptatem quasi. Aut aut maxime nisi repudiandae.',
    category: 'Hoodie',
    default_price: '809',
  },
  {
    id: 28,
    name: 'Celestino Trousers',
    slogan: 'Debitis quaerat omnis blanditiis aut qui.',
    description:
      'Eius excepturi odit magnam similique. Consequatur aspernatur maiores labore ipsum autem doloremque illo esse. Dignissimos aliquam magni dolores adipisci voluptatum necessitatibus adipisci doloremque quis.',
    category: 'Trousers',
    default_price: '218',
  },
  {
    id: 29,
    name: 'Imelda Coat',
    slogan: 'Eligendi inventore qui iste sit officia.',
    description:
      'Ut optio quos ducimus excepturi. Vitae eum expedita magni reiciendis dolorum. Laborum laboriosam et iste et qui perspiciatis porro minima fugiat.',
    category: 'Coat',
    default_price: '589',
  },
  {
    id: 30,
    name: 'Brianne Sunglasses',
    slogan: 'Placeat architecto deserunt deserunt quaerat rerum odio.',
    description:
      'Non labore architecto quis quae alias molestiae quae. Soluta quibusdam quisquam aliquid quasi rerum possimus doloremque quisquam omnis. Laudantium earum dolores iure quis.',
    category: 'Sunglasses',
    default_price: '777',
  },
  {
    id: 31,
    name: 'Sadye Backpack',
    slogan: 'Cum aut itaque.',
    description:
      'Impedit aut voluptatem sunt temporibus incidunt. Eum consequatur mollitia ad voluptatum voluptatum qui culpa. Qui magni officia sint ea omnis est labore. Numquam ut praesentium harum architecto soluta eaque iure. Sequi enim aliquid rem qui.',
    category: 'Backpack',
    default_price: '395',
  },
  {
    id: 32,
    name: 'Alisha Socks',
    slogan: 'Aut ipsa nisi possimus reprehenderit impedit optio sed quo in.',
    description:
      'Harum iusto voluptas assumenda omnis laudantium suscipit minus. Quia reiciendis quas. Quam voluptas excepturi veritatis deserunt neque eveniet quas odit numquam. Voluptates saepe sit tempora sit dicta laudantium amet dolorum tempore. Voluptatibus omnis et et iure quas voluptas et. Cupiditate expedita molestiae molestiae eligendi natus et eveniet.',
    category: 'Socks',
    default_price: '989',
  },
  {
    id: 33,
    name: 'Demetrius Shorts',
    slogan: 'Est sit quae consectetur quibusdam odit quo rerum dolores.',
    description:
      'Nihil consequatur minus enim laboriosam nihil velit. Sit neque similique sed a sunt aut. Molestias ut aut id. Sint sit molestiae.',
    category: 'Shorts',
    default_price: '794',
  },
  {
    id: 34,
    name: 'Peggie Tank Top',
    slogan: 'Quia voluptates sed ipsa temporibus ea dolor eos.',
    description:
      'Id sit doloribus aspernatur. Tempora sint voluptatibus hic soluta molestias. Accusamus adipisci corrupti consectetur pariatur dolorem molestiae. Nihil sit et ut delectus et. Sunt est accusantium est. Illum ducimus quam dolorem officia officia adipisci nulla est.',
    category: 'Tank Top',
    default_price: '645',
  },
  {
    id: 35,
    name: 'Kaylin Hat',
    slogan: 'Incidunt ullam voluptas illo quae.',
    description:
      'Voluptatibus est animi. Tenetur ut et. Laborum dolores corporis qui. Aut temporibus quidem rerum. Ex quam ratione in. Quibusdam ipsum reiciendis corporis.',
    category: 'Hat',
    default_price: '406',
  },
  {
    id: 36,
    name: 'Angelo Tank Top',
    slogan: 'Architecto accusantium nam minima.',
    description:
      'Est veritatis culpa quas aliquid consequatur sit. Qui delectus sapiente autem eaque debitis. Culpa ut vel cum. Veniam sed aut. Consequatur sed provident minima provident dolor. Adipisci quibusdam aspernatur eum veniam ipsa reiciendis.',
    category: 'Tank Top',
    default_price: '177',
  },
  {
    id: 37,
    name: 'Chad Hoodie',
    slogan: 'Modi praesentium deserunt qui cum.',
    description:
      'Libero necessitatibus et. Ut dolorem voluptatem officia quo omnis sint. Beatae dolorem voluptatem voluptatibus sit nisi odio at at labore. Sunt molestias provident voluptatem nostrum voluptates iusto itaque et.',
    category: 'Hoodie',
    default_price: '51',
  },
  {
    id: 38,
    name: 'Vince Dress',
    slogan: 'Qui quae nulla fuga ea et aut.',
    description:
      'Pariatur cumque et. Pariatur et consequatur iste aut labore. Quisquam laborum eius praesentium sed at labore perferendis sed. Qui et dolor. Non sapiente voluptas et.',
    category: 'Dress',
    default_price: '851',
  },
  {
    id: 39,
    name: 'Jude Cap',
    slogan: 'Voluptas animi inventore qui.',
    description:
      'Ipsum ut blanditiis quae qui eum. Sed nemo quia velit repellat eius. Et qui rerum saepe in distinctio eos.',
    category: 'Cap',
    default_price: '479',
  },
  {
    id: 40,
    name: 'Kenton Suit',
    slogan: 'Voluptatem dolores error blanditiis id earum.',
    description:
      'Necessitatibus mollitia odit ab illum dolores omnis enim ipsam. Dolorem libero aut explicabo molestias ea odit non aliquid sunt. Possimus facilis labore iusto.',
    category: 'Suit',
    default_price: '503',
  },
  {
    id: 41,
    name: 'Margaretta Shirt',
    slogan: 'Dolorem voluptas esse vero ullam quia.',
    description:
      'Sequi repudiandae quia sapiente aut exercitationem eveniet dignissimos. Voluptatibus ea dolorem. Ea quae cupiditate ipsam tenetur fugiat aperiam. Voluptate quod ut aspernatur earum sint soluta aperiam. Culpa sunt ut et laboriosam et error et doloremque.',
    category: 'Shirt',
    default_price: '11',
  },
  {
    id: 42,
    name: 'Meagan Sweater',
    slogan: 'Labore enim consequatur iure et ut.',
    description:
      'Eius amet ducimus architecto odio ipsam est voluptatum possimus. Iste odio et iusto eos aut sapiente corporis blanditiis est. Hic tempore et error labore voluptate. Eum id repudiandae harum deleniti eveniet omnis et animi est. Dolore eius odit. Cumque in deserunt recusandae id sunt et.',
    category: 'Sweater',
    default_price: '247',
  },
  {
    id: 43,
    name: 'Cortney 1400 Sweater',
    slogan: 'Eum et ut et qui.',
    description:
      'Distinctio aut praesentium ut iste. Vero dignissimos porro voluptatem ut. Maxime itaque et occaecati placeat omnis. Et harum mollitia debitis porro omnis et et omnis vero.',
    category: 'Sweater',
    default_price: '707',
  },
  {
    id: 44,
    name: 'Myrtice Shorts',
    slogan: 'Omnis debitis nisi rerum eum sit similique.',
    description:
      'Fugiat itaque ut rerum quisquam deserunt labore ut laudantium ducimus. Et ex voluptatem. Ut explicabo quae reprehenderit. Cum quasi quia. Ab consequatur veniam est quo sint praesentium.',
    category: 'Shorts',
    default_price: '752',
  },
  {
    id: 45,
    name: 'Vernice Shirt',
    slogan: 'Nobis vero et inventore libero repellendus et adipisci ea.',
    description:
      'Repudiandae ipsam quod qui sed enim sit. Itaque quas sit voluptates ab voluptatibus repudiandae architecto rerum. Non quia impedit voluptas. Est optio eveniet quod non quae tempore consequatur a.',
    category: 'Shirt',
    default_price: '861',
  },
  {
    id: 46,
    name: 'Ole Sunglasses',
    slogan: 'Eos veritatis sit consequatur nisi.',
    description:
      'Doloribus doloribus necessitatibus ea et aut quisquam deserunt omnis quo. Eos repellat voluptatum architecto cupiditate inventore voluptatem. Voluptatem consequatur aliquid repudiandae id maiores rerum vel corrupti. Voluptas et est dignissimos et qui. Dolore facilis ullam. Quae cumque quo alias quod eos ea assumenda alias nihil.',
    category: 'Sunglasses',
    default_price: '142',
  },
  {
    id: 47,
    name: 'Delia Shoes',
    slogan: 'Aliquid aut doloremque officia nam aut.',
    description:
      'Ipsum voluptatem et perferendis dignissimos assumenda aut id sequi ea. Aut eos et laudantium ut omnis. Modi iure alias.',
    category: 'Shoes',
    default_price: '444',
  },
  {
    id: 48,
    name: 'Karolann Sunglasses',
    slogan: 'Rerum impedit cum deleniti inventore sunt dicta quas deleniti.',
    description:
      'Unde ad quam. Praesentium ea voluptatem. Voluptatem est delectus modi.',
    category: 'Sunglasses',
    default_price: '236',
  },
  {
    id: 49,
    name: 'Hortense Slacks',
    slogan: 'Ea ullam illum culpa quo ex ut eius.',
    description:
      'Sequi qui est. Consequuntur incidunt ipsam ipsam itaque voluptas. Doloribus natus omnis optio. Explicabo dolor est sunt provident. Deserunt quos recusandae numquam. At omnis quia non.',
    category: 'Slacks',
    default_price: '692',
  },
  {
    id: 50,
    name: 'Aubrey Dress',
    slogan: 'Accusantium culpa cum et ducimus nesciunt.',
    description:
      'Qui expedita animi corrupti. Sed aliquam officia et adipisci nulla quo molestiae. Voluptas quia voluptatem odit vitae.',
    category: 'Dress',
    default_price: '966',
  },
  {
    id: 51,
    name: 'Demetris 1600 Coat',
    slogan: 'At dolore repudiandae.',
    description:
      'Eaque ut nostrum itaque quae commodi accusamus aut ab incidunt. Molestias sequi ut ut sapiente esse quod. Rerum nobis placeat consectetur qui sed.',
    category: 'Coat',
    default_price: '880',
  },
  {
    id: 52,
    name: 'Cordia Shorts',
    slogan: 'Eaque quos ullam molestiae tempora iure eos ipsam corporis ea.',
    description:
      'Dolores error recusandae tempora dolores nihil ut. Vel quaerat nemo velit voluptas totam ipsam est quia. Laudantium possimus non et. Nihil ad eos accusantium aliquid est et repellat suscipit.',
    category: 'Shorts',
    default_price: '667',
  },
  {
    id: 53,
    name: 'Nina Hat',
    slogan: 'Pariatur quidem quidem.',
    description:
      'Aspernatur praesentium aut deleniti porro ut ipsa molestias. Enim non totam numquam facere. Nulla qui qui eligendi ea excepturi adipisci a qui. Sunt culpa quasi.',
    category: 'Hat',
    default_price: '483',
  },
  {
    id: 54,
    name: 'Felicita Boots',
    slogan: 'Quaerat quae deserunt ea nihil et ullam ut distinctio sint.',
    description:
      'Laboriosam qui accusamus voluptate aperiam recusandae quasi laudantium doloremque. Tenetur laboriosam inventore veniam. Excepturi illo fuga animi sed. Dolor id ad non vitae. Porro quas debitis saepe enim reprehenderit.',
    category: 'Boots',
    default_price: '949',
  },
  {
    id: 55,
    name: 'Antonette Jacket',
    slogan: 'Voluptate aut eaque qui mollitia magnam voluptas nemo aut neque.',
    description:
      'Velit harum voluptate tempora ex eum laboriosam nostrum. Vitae dicta et in molestias aperiam. Mollitia cumque quis dolorum nam ut amet quasi.',
    category: 'Jacket',
    default_price: '226',
  },
  {
    id: 56,
    name: 'Lea Cap',
    slogan: 'Vel nemo nihil aperiam et aut.',
    description:
      'Sunt quae facilis quisquam officiis est soluta et iure in. Ipsam labore quidem aliquam in ut qui ullam ipsam dolorum. Temporibus doloribus sapiente. Laudantium esse facilis quia enim. Eum qui exercitationem nesciunt sit. Laboriosam voluptas velit.',
    category: 'Cap',
    default_price: '794',
  },
  {
    id: 57,
    name: 'Tevin Cap',
    slogan: 'Sed vel aperiam eum.',
    description:
      'Voluptas sit minima quibusdam. Qui officiis sit quibusdam explicabo. Sint aut sit expedita dolorem hic. Tempora itaque sequi sed voluptates.',
    category: 'Cap',
    default_price: '469',
  },
  {
    id: 58,
    name: 'Clarabelle Jacket',
    slogan: 'Eligendi ducimus odit quod rerum et dolorem natus dolor ducimus.',
    description:
      'Sint tempora veritatis consequatur provident autem minima omnis. Quaerat voluptatibus qui et. Doloremque est ut recusandae officia nesciunt. Aliquid quia quia qui voluptatibus. Eum vel sunt in nulla voluptas iste.',
    category: 'Jacket',
    default_price: '439',
  },
  {
    id: 59,
    name: 'Aditya Slacks',
    slogan: 'Rem temporibus amet sit aut aut magni.',
    description:
      'Provident et adipisci nobis incidunt. Incidunt quos harum impedit nemo totam quidem. Sint aut dolorem libero et necessitatibus quam. Adipisci aliquam et aut harum eius rerum minus et. At nihil quia eveniet tempore corrupti. Consequuntur quidem quis tempore earum vel commodi et neque.',
    category: 'Slacks',
    default_price: '67',
  },
  {
    id: 60,
    name: 'Keyshawn Romper',
    slogan: 'Perferendis ipsum atque ut.',
    description:
      'Laboriosam corporis laboriosam maiores aut recusandae voluptatibus id voluptatem illo. Nihil voluptatem blanditiis. Voluptatem vitae accusantium esse expedita pariatur ut.',
    category: 'Romper',
    default_price: '764',
  },
  {
    id: 61,
    name: 'Carolina Coat',
    slogan: 'Eligendi minima nihil quia.',
    description:
      'Iste rerum alias. Rerum sunt quis omnis ea alias. Voluptatem culpa dolor facilis. Nam est doloremque maxime id explicabo eius ab dolores incidunt. Vitae dicta tempora perspiciatis inventore velit ducimus facere. Aut recusandae aut minus.',
    category: 'Coat',
    default_price: '543',
  },
  {
    id: 62,
    name: 'Francis Backpack',
    slogan: 'Et quis dolor inventore placeat.',
    description:
      'Animi praesentium ducimus eum. Quam voluptates ab eum expedita maiores qui delectus excepturi. Sunt autem doloremque omnis et quo placeat tempora consequatur. Maxime nihil nostrum et deserunt ea. Voluptatibus et sequi rerum. Aut sint nostrum consequatur asperiores ut.',
    category: 'Backpack',
    default_price: '969',
  },
  {
    id: 63,
    name: 'Jamaal Tank Top',
    slogan: 'Minus ullam laborum minima et.',
    description:
      'Facilis qui et vero delectus aspernatur iure incidunt voluptates ipsum. Provident sapiente incidunt velit eaque illum sit. Sint velit in eum.',
    category: 'Tank Top',
    default_price: '747',
  },
  {
    id: 64,
    name: 'Demond Cap',
    slogan: 'Amet aut odio unde expedita est officiis voluptatum fuga.',
    description:
      'Eum et vel omnis nisi hic qui minima magnam. Enim amet sapiente quas modi ullam saepe unde quis. Voluptatum aut incidunt.',
    category: 'Cap',
    default_price: '750',
  },
  {
    id: 65,
    name: 'Rudolph Pants',
    slogan: 'Rem cum impedit consequuntur esse mollitia accusantium et.',
    description:
      'Et qui nam necessitatibus nihil incidunt harum. Distinctio molestias omnis harum quos qui sunt culpa quo. Sed possimus perspiciatis doloribus et autem ratione temporibus. Temporibus quia autem quam rerum tenetur reiciendis et quisquam tempore. Impedit et dolorem ipsa similique sint et ipsam rerum vel. Est modi aperiam autem sit ratione sint ducimus et.',
    category: 'Pants',
    default_price: '30',
  },
  {
    id: 66,
    name: 'Jannie Hoodie',
    slogan: 'Modi aut pariatur nobis deleniti fugiat.',
    description:
      'Aliquid vel voluptatum eos veniam architecto. Blanditiis autem tempore doloribus magni ipsum eveniet atque. Sed suscipit placeat. Praesentium ipsam doloremque non quod. Temporibus aut veritatis enim aliquam. Veritatis provident laboriosam.',
    category: 'Hoodie',
    default_price: '659',
  },
  {
    id: 67,
    name: 'Leon Cap',
    slogan: 'Non beatae doloribus earum amet incidunt.',
    description:
      'Nisi vitae nisi et est quos reiciendis tempore veritatis. Quibusdam commodi molestiae tempore doloremque corrupti non suscipit. Placeat tempora sit dolor eius. Distinctio aut alias perferendis qui fuga ut. Ut sequi tempora nihil repellat dolor facere repudiandae. Aliquam quo soluta voluptas vel.',
    category: 'Cap',
    default_price: '676',
  },
  {
    id: 68,
    name: 'Marge Hat',
    slogan: 'Libero quaerat labore doloribus.',
    description:
      'Odio ducimus magni repellat sapiente. Cum ut occaecati reprehenderit et delectus qui est dolore. Consequatur nobis eos nisi quo. Consequatur natus quod.',
    category: 'Hat',
    default_price: '820',
  },
  {
    id: 69,
    name: 'Melvina Skirt',
    slogan: 'Quia quo ut id repellendus molestias ratione delectus.',
    description:
      'Accusamus rerum voluptas. Temporibus deleniti quo doloribus. Expedita dolorum deleniti consequatur consequatur. Explicabo aut sed at.',
    category: 'Skirt',
    default_price: '972',
  },
  {
    id: 70,
    name: 'Derek Hat',
    slogan: 'Rerum voluptatem qui recusandae temporibus.',
    description:
      'Cupiditate atque aut. Molestiae suscipit ullam corrupti soluta est. Molestias non qui animi quo necessitatibus quibusdam. Quia cum facilis temporibus voluptas ut minus debitis sit.',
    category: 'Hat',
    default_price: '751',
  },
  {
    id: 71,
    name: 'Tania Trousers',
    slogan: 'Expedita nemo animi et deserunt omnis cumque dolor totam ea.',
    description:
      'Rerum mollitia nostrum occaecati soluta aut voluptatibus fuga laborum. Sunt quaerat neque ut aperiam. Cum excepturi provident aut et sed perferendis vel placeat ex. Et eos velit sint harum.',
    category: 'Trousers',
    default_price: '521',
  },
  {
    id: 72,
    name: 'Blake Boots',
    slogan: 'Voluptatum labore illum eos quia voluptas ullam est.',
    description:
      'Veniam eum similique quo ea accusamus libero recusandae eum. Quia et excepturi eum vero nihil. Deserunt dicta voluptatem officia sequi. Et aut et sit. Quasi itaque et dolorum ea molestias sit.',
    category: 'Boots',
    default_price: '15',
  },
  {
    id: 73,
    name: 'Easton Pants',
    slogan: 'Iste quibusdam soluta sit atque suscipit ipsum neque.',
    description:
      'Dignissimos inventore qui. Cupiditate debitis cum veniam magni aperiam sapiente ipsam. Nisi aliquam et voluptatum iusto quo inventore possimus. Excepturi illum voluptas necessitatibus quisquam rerum tempore ut aliquid. Saepe nesciunt deserunt cupiditate aut quidem.',
    category: 'Pants',
    default_price: '589',
  },
  {
    id: 74,
    name: 'Timmothy Skirt',
    slogan: 'Eum voluptas dolore quo hic.',
    description:
      'Doloribus nam et voluptatem recusandae suscipit ducimus officia non. Optio alias vel corrupti laboriosam. Officia error ipsam doloremque aut quam.',
    category: 'Skirt',
    default_price: '628',
  },
  {
    id: 75,
    name: 'Paige Socks',
    slogan: 'Velit quia laboriosam laboriosam qui.',
    description:
      'Non enim enim odit vel repellendus vel praesentium dolor est. Omnis sed veritatis. Est est aperiam tempore animi excepturi.',
    category: 'Socks',
    default_price: '889',
  },
  {
    id: 76,
    name: 'Antwon Cap',
    slogan: 'Dignissimos nihil nobis rerum est perspiciatis dolor ut.',
    description:
      'Consequatur molestiae eum numquam. Assumenda ipsa placeat. In sunt doloremque ea. Tenetur error voluptas eveniet cumque quisquam maxime iure ab. Totam tenetur vitae sunt incidunt animi eum voluptatum sunt. Provident sit modi.',
    category: 'Cap',
    default_price: '764',
  },
  {
    id: 77,
    name: 'Joshua Sweater',
    slogan: 'Aut dolores dolor aut ducimus quos animi voluptatem.',
    description:
      'Ullam ipsam dignissimos dolorum beatae. Voluptatum iusto quia. Magnam numquam totam eveniet blanditiis possimus.',
    category: 'Sweater',
    default_price: '301',
  },
  {
    id: 78,
    name: 'Sophie Jacket',
    slogan: 'Excepturi provident eos et vero architecto ad ea velit ex.',
    description:
      'Omnis et molestiae ea sit exercitationem aut quia. Quia ea maxime laudantium molestias in. Quaerat nihil quidem est necessitatibus commodi rerum.',
    category: 'Jacket',
    default_price: '360',
  },
  {
    id: 79,
    name: 'Rachael Coat',
    slogan: 'Qui dolorem error.',
    description:
      'Fuga voluptas laudantium tenetur ducimus. Delectus voluptatum nesciunt. Nam unde facere voluptatibus minus qui explicabo quae sunt.',
    category: 'Coat',
    default_price: '666',
  },
  {
    id: 80,
    name: 'Kamille Hoodie',
    slogan: 'Officiis ut omnis iusto excepturi deserunt.',
    description:
      'Blanditiis vero eaque eaque accusantium ea et. Tempore voluptates magni deleniti exercitationem nihil nesciunt quidem quas. Commodi error qui incidunt illo fugit eveniet praesentium. Enim veritatis qui fuga qui impedit.',
    category: 'Hoodie',
    default_price: '244',
  },
  {
    id: 81,
    name: 'The Michaela Coat',
    slogan:
      'Ipsam recusandae atque repellat dolorum reiciendis facere quaerat.',
    description:
      'Et aliquid similique harum ut quia. Totam ratione quibusdam veniam harum sit id omnis nam. Ab aut voluptatem ipsam placeat quia. Vel eum aliquam sint eaque eum consequuntur quo minima. Quod voluptas perferendis sit dolores consequuntur.',
    category: 'Coat',
    default_price: '879',
  },
  {
    id: 82,
    name: 'Antonio Shorts',
    slogan: 'Esse tenetur suscipit neque.',
    description:
      'Reiciendis earum nemo cupiditate ut dolorem. Nesciunt minus eos. Perferendis excepturi voluptatem dolore in tempore sit rerum. Quo molestiae alias qui corporis sint neque laudantium.',
    category: 'Shorts',
    default_price: '858',
  },
  {
    id: 83,
    name: 'King Hat',
    slogan: 'Voluptatibus velit eos voluptatum sequi dicta eum.',
    description:
      'Consequatur veniam aut suscipit enim sed nulla est minima. Esse perspiciatis dolorum est eaque. Qui a odio rem reiciendis eveniet.',
    category: 'Hat',
    default_price: '545',
  },
  {
    id: 84,
    name: 'Olaf Sunglasses',
    slogan: 'Sunt ad architecto maxime dolorem.',
    description:
      'Autem dolores repellendus atque quas. Aut officiis ut similique sapiente autem laboriosam optio sint. Aspernatur saepe quis iusto dolorem laborum repudiandae dolorum. Consequatur inventore qui est modi a iste totam provident amet.',
    category: 'Sunglasses',
    default_price: '83',
  },
  {
    id: 85,
    name: 'Shaina Cap',
    slogan: 'Sit voluptatem pariatur quo cupiditate.',
    description:
      'Cum ea sapiente explicabo magnam. Maxime totam omnis. Suscipit accusamus ipsa. Aut assumenda laboriosam est qui ratione eius expedita quidem perspiciatis. Suscipit architecto debitis assumenda fugit quisquam.',
    category: 'Cap',
    default_price: '220',
  },
  {
    id: 86,
    name: 'Nash Sunglasses',
    slogan:
      'Laboriosam expedita commodi consectetur totam repellendus minima deserunt modi dolores.',
    description:
      'Alias est sed. Qui ut reprehenderit ullam. Dolor numquam aliquid quia earum et. Reprehenderit id accusamus totam aliquam magni occaecati adipisci ea.',
    category: 'Sunglasses',
    default_price: '567',
  },
  {
    id: 87,
    name: 'Alfonso 1150 Skirt',
    slogan: 'Quos sed sed sit corporis eum facilis recusandae eaque.',
    description:
      'Porro harum explicabo consequatur qui velit. Iusto numquam blanditiis error. Nesciunt possimus cumque est cupiditate vel. Consequuntur est qui.',
    category: 'Skirt',
    default_price: '109',
  },
  {
    id: 88,
    name: 'Bartholome Boots',
    slogan: 'Porro eum facere reiciendis.',
    description:
      'Facilis dolores nulla atque velit facilis iste quis voluptatibus. Beatae consectetur fugiat. Ut voluptates iusto. Debitis magni nisi laboriosam. Et animi iste. Quo facere sunt quo voluptatem velit rerum commodi.',
    category: 'Boots',
    default_price: '108',
  },
  {
    id: 89,
    name: 'Tommie Backpack',
    slogan:
      'Non necessitatibus error minus reprehenderit voluptates placeat quis mollitia.',
    description:
      'Ipsa harum nobis quaerat. Blanditiis quia consequatur. Quod tenetur aut expedita ipsa atque error reprehenderit. Occaecati eveniet dolore ea in. Possimus suscipit autem molestias eum.',
    category: 'Backpack',
    default_price: '693',
  },
  {
    id: 90,
    name: 'Edd Dress',
    slogan: 'Fugit laudantium quisquam ab quo.',
    description:
      'Et doloribus aspernatur qui minima natus. Deleniti repellat qui. Maiores molestias dolores.',
    category: 'Dress',
    default_price: '174',
  },
  {
    id: 91,
    name: 'Aliza Sweater',
    slogan: 'Ex veritatis voluptas.',
    description:
      'Veniam eius culpa sit. Qui in perferendis saepe eaque labore odio voluptates. Ullam fugiat temporibus voluptatum qui aut voluptas aut beatae. Molestiae minus sit esse qui aut repellat. Ut neque molestiae sit. Modi temporibus nesciunt minima numquam veniam.',
    category: 'Sweater',
    default_price: '59',
  },
  {
    id: 92,
    name: 'Lacey Skirt',
    slogan: 'Nemo magni dolore animi sapiente laborum autem eum laborum.',
    description:
      'Aperiam dignissimos consequatur. Libero ipsam rerum. Aut rem voluptas dolor.',
    category: 'Skirt',
    default_price: '315',
  },
  {
    id: 93,
    name: 'Thelma 1700 Sweater',
    slogan: 'Ut qui pariatur reiciendis iusto neque beatae optio.',
    description:
      'Illo animi nostrum enim est amet qui quia. Illum vero quibusdam perspiciatis rem soluta blanditiis et eos. Voluptatum adipisci occaecati sequi dolores. Dolores possimus porro saepe id veritatis recusandae sed. Voluptas labore aut aut quaerat. Esse ut aut aut quia et aut et veritatis.',
    category: 'Sweater',
    default_price: '530',
  },
  {
    id: 94,
    name: 'Savanna Suit',
    slogan: 'Reprehenderit illo commodi maxime nisi labore eaque est.',
    description:
      'Sint consequatur sit. Qui aut in porro perspiciatis officia distinctio aspernatur dicta deserunt. Quibusdam corporis assumenda quos possimus nihil ratione quia. Iure voluptatibus nihil laudantium porro rem illum animi distinctio repudiandae. Consequatur nam sunt ea harum.',
    category: 'Suit',
    default_price: '118',
  },
  {
    id: 95,
    name: 'Lazaro Backpack',
    slogan: 'Non molestias sed ut.',
    description:
      'Nemo odit ut ut vel blanditiis dolor quaerat amet praesentium. Ipsam qui totam quasi sint aliquam optio provident sunt optio. Dolor culpa minima in voluptatem omnis rerum qui consequatur. Nisi nemo sequi qui ipsum aut laboriosam eos voluptas dolor. Ipsam inventore explicabo.',
    category: 'Backpack',
    default_price: '798',
  },
  {
    id: 96,
    name: 'Lilliana Jacket',
    slogan: 'Non ipsam dolorum error exercitationem recusandae reiciendis.',
    description:
      'Quia perspiciatis expedita tempora aut harum sit nihil. Ea eius dicta libero nostrum quisquam eveniet. Odit est quibusdam libero illum eius. Pariatur molestiae fuga repellendus illum aliquam.',
    category: 'Jacket',
    default_price: '391',
  },
  {
    id: 97,
    name: 'Armand Shirt',
    slogan: 'Enim officia optio tempora cumque sed velit ex ut corporis.',
    description:
      'Voluptatem aliquid velit voluptatum hic. Voluptatibus est tenetur labore expedita dicta hic ut. Enim veniam qui delectus a. Cupiditate consectetur saepe accusamus hic error. Nam deleniti qui veritatis et quidem harum laboriosam.',
    category: 'Shirt',
    default_price: '646',
  },
  {
    id: 98,
    name: 'Gregg Sunglasses',
    slogan: 'Et omnis id molestiae culpa laudantium sunt vitae.',
    description:
      'Nesciunt perferendis vel et ut ipsam. Non quis veniam impedit quas est. Nobis ipsa labore et. Id libero perferendis rerum dolorem velit quaerat nam perferendis.',
    category: 'Sunglasses',
    default_price: '514',
  },
  {
    id: 99,
    name: 'Evert Suit',
    slogan: 'Laudantium sequi quia ut debitis aut aut culpa aut.',
    description:
      'Assumenda eveniet officiis distinctio ratione voluptas nihil. In praesentium veniam. Reiciendis voluptatem recusandae et cupiditate enim harum excepturi exercitationem in. Et provident ea voluptatem aut aperiam.',
    category: 'Suit',
    default_price: '234',
  },
  {
    id: 100,
    name: 'Leon Skirt',
    slogan: 'Non sunt laudantium dicta et voluptatem ex nemo.',
    description:
      'Earum quia doloremque consequatur. Et quia animi ad in quasi enim quasi excepturi. Vero error architecto quia id. Enim aut ad odit.',
    category: 'Skirt',
    default_price: '944',
  },
  {
    id: 101,
    name: 'Reid Coat',
    slogan: 'Est dignissimos omnis adipisci.',
    description:
      'Possimus modi voluptas voluptatem natus. Quia fugit odit aperiam similique itaque aut culpa non. Et quia voluptas ad et eos velit autem deserunt. Aut quisquam repellat a exercitationem deleniti. Sequi sed cupiditate exercitationem consequatur voluptas qui blanditiis neque.',
    category: 'Coat',
    default_price: '728',
  },
];

module.exports = products;
