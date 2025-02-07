import image1 from './assets/products/BlackStripTshirt.png'
import image2 from './assets/products/CHECKERED.png'
import image3 from './assets/products/Contrast_Tshirt.png'
import image4 from './assets/products/CourageTshirt.png'
import image5 from './assets/products/FadeJean.png'
import image6 from './assets/products/Shorts.png'
import image7 from './assets/products/SleeveTshirt.png'
import image8 from './assets/products/TShirt.png'
import image9 from './assets/products/TrippingTshirt.png'
import image10 from './assets/products/VerticalShirt.png'
import image11 from './assets/products/gradient_tshirt.png'
import image12 from './assets/products/Jean.png'

const ProductJson =
    [
        {
            "id": 1,
            "name": "Black Strip T-shirt",
            "price": 25,
            "stockLeft": 10,
            "description": "A stylish black striped t-shirt perfect for casual wear. It adds a touch of sophistication to any casual outfit. Wear it with jeans or shorts for a cool, laid-back look. This versatile t-shirt can be paired with jackets for cooler days.",
            "category": "T-Shirts",
            "sizes": [
                "S",
                "M",
                "L",
                "XL"
            ],
            "rating": 4.5,
            "image": image1
        },
        {
            "id": 2,
            "name": "Checkered Shirt",
            "price": 30,
            "stockLeft": 20,
            "description": "Classic checkered pattern shirt for a trendy look. The bold pattern gives it a modern edge, making it an ideal piece for both casual and semi-formal occasions. Perfect with jeans, chinos, or shorts, depending on the style you're after.",
            "category": "Shirts",
            "sizes": [
                "M",
                "L",
                "XL"
            ],
            "rating": 4.3,
            "image": image2
        },
        {
            "id": 3,
            "name": "Contrast T-shirt",
            "price": 28,
            "stockLeft": 25,
            "description": "A contrast-colored t-shirt for a modern and bold style. The distinct color-blocking design makes it a standout piece in your wardrobe. Pair it with denim for a casual yet stylish appearance, suitable for day outings or hanging out with friends.",
            "category": "T-Shirts",
            "sizes": [
                "S",
                "M",
                "L"
            ],
            "rating": 4.4,
            "image": image3
        },
        {
            "id": 4,
            "name": "Courage T-shirt",
            "price": 22,
            "stockLeft": 22,
            "description": "Inspirational quote printed t-shirt to boost your courage. With a motivational message displayed boldly, it's perfect for a positive and confident vibe. Wear it during your everyday activities or on casual outings for an added boost of self-esteem.",
            "category": "T-Shirts",
            "sizes": [
                "M",
                "L"
            ],
            "rating": 4.6,
            "image": image4
        },
        {
            "id": 5,
            "name": "Fade Jean",
            "price": 50,
            "stockLeft": 15,
            "description": "Comfortable and stylish faded jeans for everyday wear. The faded look gives them a well-worn, relaxed feel, while the fit ensures comfort throughout the day. Pair with any of your favorite t-shirts or jackets for a perfect casual look.",
            "category": "Pants",
            "sizes": [
                "30",
                "32",
                "34",
                "36"
            ],
            "rating": 4.7,
            "image": image5
        },
        {
            "id": 6,
            "name": "Gradient T-shirt",
            "price": 30,
            "stockLeft": 9,
            "description": "A gradient color t-shirt, perfect for a vibrant style. The color transition adds a fresh, modern flair to your wardrobe. Whether you're pairing it with shorts or jeans, it's an easy way to stand out in any casual setting.",
            "category": "T-Shirts",
            "sizes": [
                "S",
                "M",
                "L",
                "XL"
            ],
            "rating": 4.3,
            "image": image11
        },
        {
            "id": 7,
            "name": "Jean",
            "price": 40,
            "stockLeft": 16,
            "description": "Classic blue jeans, a wardrobe staple for casual wear. With a timeless design and a comfortable fit, these jeans will complement almost any outfit. Dress them up with a shirt or keep it casual with a t-shirt for an effortless look.",
            "category": "Pants",
            "sizes": [
                "30",
                "32",
                "34",
                "36"
            ],
            "rating": 4.5,
            "image": image12
        },
        {
            "id": 8,
            "name": "Shorts",
            "price": 22,
            "stockLeft": 18,
            "description": "Comfortable and breathable shorts for warm weather. These shorts are made for maximum comfort and ease, making them ideal for summer outings or casual days at home. Pair them with a simple t-shirt or polo for a laid-back style.",
            "category": "Pants",
            "sizes": [
                "S",
                "M",
                "L",
                "XL"
            ],
            "rating": 4.2,
            "image": image6
        },
        {
            "id": 9,
            "name": "Sleeve T-shirt",
            "price": 26,
            "stockLeft": 19,
            "description": "A stylish t-shirt with sleeves for a trendy, casual look. This t-shirt brings a fresh twist to a classic design with its comfortable fit and attention to detail. A great choice for any casual occasion, pairing perfectly with jeans or shorts.",
            "category": "T-Shirts",
            "sizes": [
                "S",
                "M",
                "L",
                "XL"
            ],
            "rating": 4.4,
            "image": image7
        },
        {
            "id": 10,
            "name": "Tripping T-shirt",
            "price": 24,
            "stockLeft": 20,
            "description": "A t-shirt with a cool, laid-back design perfect for trips. Designed for comfort and ease, it’s the ideal piece for travel days or weekends away. Pair it with comfortable shorts or jeans for a relaxed yet stylish look wherever you go.",
            "category": "T-Shirts",
            "sizes": [
                "S",
                "M",
                "L"
            ],
            "rating": 4.3,
            "image": image9
        },
        {
            "id": 11,
            "name": "T-shirt",
            "price": 20,
            "stockLeft": 50,
            "description": "A basic, comfortable t-shirt for everyday use. Made from soft fabric, it's the go-to piece for casual days or layering under jackets and hoodies. Versatile and easy to wear, it pairs well with anything in your wardrobe.",
            "category": "T-Shirts",
            "sizes": [
                "S",
                "M",
                "L",
                "XL"
            ],
            "rating": 4.1,
            "image": image8
        },
        {
            "id": 12,
            "name": "Vertical Shirt",
            "price": 33,
            "stockLeft": 18,
            "description": "A vertically patterned shirt for a bold, modern look. This shirt features striking vertical stripes that elongate the frame and add an interesting design element. Perfect for a day at the office or a night out, it makes a sophisticated statement.",
            "category": "Shirts",
            "sizes": [
                "M",
                "L",
                "XL"
            ],
            "rating": 4.6,
            "image": image10
        }
    ]

    export default ProductJson