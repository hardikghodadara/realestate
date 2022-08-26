import React, { useState } from "react";
import styles from "./Realestate.module.css";

function PropertyCard({ properties }) {
    const [isLiked, setIsLiked] = useState(false);
    const onLikedClick = () => {
        setIsLiked((prev) => {
            return !prev;
        });
    };

    return (
        <div className={styles.card}>
            <img src={properties.image} alt="house" className={styles.image} />
            <div className={styles.cardContent}>
                <div className={styles.flexRowCenter}>
                    <div className={styles.priceText}>
                        ${properties.price}
                        <span className={styles.text}>/month</span>
                    </div>
                    <div className={styles.icon} onClick={onLikedClick}>
                        {isLiked ? (
                            <img
                                src="https://img.icons8.com/ios-filled/20/000000/like--v1.png"
                                alt="hearticon"
                            />
                        ) : (
                            <img
                                src="https://img.icons8.com/windows/20/000000/like--v1.png"
                                alt="heartemt"
                            />
                        )}
                    </div>
                </div>
                <div className={styles.secondaryText}> {properties.pName} </div>
                <div className={styles.ternaryText}>{properties.address}</div>
                <div className={styles.line} />
                <div className={styles.flexRowCenter}>
                    <div className={styles.flexRowCenter}>
                        <img
                            className={styles.iconSmall}
                            src="https://img.icons8.com/fluency/20/000000/double-bed.png"
                            alt="bed"
                        />
                        <span className={styles.text}>
                            {`${properties.facilities.bed} `}Beds
                        </span>
                    </div>
                    <div className={styles.flexRowCenter}>
                        <img
                            className={styles.iconSmall}
                            src="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/20/000000/external-bathtub-hotel-smashingstocks-flat-smashing-stocks.png"
                            alt="bathtub"
                        />
                        <span className={styles.text}>
                            {`${properties.facilities.bathrooms} `}Bathrooms
                        </span>
                    </div>
                    <div className={styles.flexRowCenter}>
                        <img
                            className={styles.iconSmall}
                            src="https://img.icons8.com/emoji/20/000000/triangular-ruler-emoji.png"
                            alt="squreft"
                        />
                        <span className={styles.text}>
                            {`${properties.area} `}
                            <span>
                                m<sup>2</sup>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function DisplayProperties({ data }) {
    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                {data.map((properties, index) => {
                    return <PropertyCard key={index} properties={properties} />;
                })}
            </div>
        </div>
    );
}
