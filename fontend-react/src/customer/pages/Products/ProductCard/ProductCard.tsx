import React, { useState, useEffect, MouseEvent } from "react";
import "./ProductCard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { purple } from "@mui/material/colors";
import { Box, Button, IconButton, Modal } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../../../types/productTypes";
import {
    useAppDispatch,
    useAppSelector,
} from "../../../../Redux Toolkit/Store";
import { fetchProductById } from "../../../../Redux Toolkit/Customer/ProductSlice";
import { addProductToWishlist } from "../../../../Redux Toolkit/Customer/WishlistSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { isWishlisted } from "../../../../util/isWishlisted";
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ChatBot from "../../ChatBot/ChatBot";

interface ProductCardProps {
    // images: string[];
    // categoryId: string | undefined;
    item: Product;
}
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "auto",
    borderRadius: ".5rem",
    boxShadow: 24,

};

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const { wishlist } = useAppSelector((store) => store);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [showChatBot, setShowChatBot] = useState(false)

    const handleAddWishlist = (event: MouseEvent) => {
        event.stopPropagation();
        setIsFavorite((prev) => !prev);
        if (item.id) dispatch(addProductToWishlist({ productId: item.id }));
    };

    useEffect(() => {
        let interval: any;
        if (isHovered) {
            interval = setInterval(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % item.images.length);
            }, 1000); // Change image every 1 second
        } else if (interval) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isHovered, item.images.length]);

    const handleShowChatBot = (event: MouseEvent) => {
        event.stopPropagation();
        setShowChatBot(true)
    }
    const handleCloseChatBot = (e: MouseEvent) => {
        e.stopPropagation();
        setShowChatBot(false)
    }

    return (
        <>
            <div
                onClick={() =>
                    navigate(
                        `/product-details/${item.category?.categoryId}/${item.title}/${item.id}`
                    )
                }
                className="group px-4 relative"
            >
                <div
                    className="card "
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {item.images.map((image: any, index: number) => (
                        <img
                            key={index}
                            className="card-media object-top"
                            src={image}
                            alt={`product-${index}`}
                            style={{
                                transform: `translateX(${(index - currentImage) * 100}%)`,
                            }}
                        />
                    ))}
                    {isHovered && (
                        <div className="indicator flex flex-col items-center space-y-2">
                            <div className="flex gap-4">
                                {item.images.map((item: any, index: number) => (
                                    <button
                                        key={index}
                                        className={`indicator-button ${index === currentImage ? "active" : ""
                                            }`}
                                        onClick={() => setCurrentImage(index)}
                                    />
                                ))}
                            </div>

                            <div className="flex gap-3">
                                {wishlist.wishlist && (
                                    <Button
                                        variant="contained"
                                        color="primary"

                                        sx={{ zIndex: 10 }}
                                        className=" z-50"
                                        onClick={handleAddWishlist}
                                    >
                                        {isWishlisted(wishlist.wishlist, item) ? (
                                            <FavoriteIcon sx={{ color: "white" }} />
                                        ) : (
                                            <FavoriteBorderIcon sx={{ color: "black" }} />
                                        )}
                                    </Button>
                                )}
                                <Button onClick={handleShowChatBot} color="primary" variant="contained">
                                    <ModeCommentIcon sx={{ color: "white" }} />
                                </Button>
                            </div>


                        </div>
                    )}
                </div>
                <div className="details pt-3 space-y-1 group-hover-effect rounded-md shadow-md hover:shadow-xl hover:shadow-black transition duration-300">
                    <div className="name space-y ">
                        <h1 className="font-semibold text-lg">
                            {item.seller?.businessDetails.businessName}
                        </h1>
                        <p className="text-black">{item.title}</p>
                    </div>
                    <div className="price flex items-center gap-3 ">
                        <span className="font-semibold text-black">
                            {" "}
                            ₹{item.sellingPrice}
                        </span>
                        <span className="text thin-line-through text-grey-500 ">
                            ₹{item.mrpPrice}
                        </span>
                        <span className="text-[#a738fc] font-semibold">
                            {item.discountPercent}% off
                        </span>
                    </div>
                </div>

            </div>
            {showChatBot && <section className="absolute left-16 top-0">
                <Modal
                    open={true}
                    onClose={handleCloseChatBot}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <ChatBot handleClose={handleCloseChatBot} productId={item.id} />
                    </Box>
                </Modal>

            </section>}
        </>
    );
};

export default ProductCard;
