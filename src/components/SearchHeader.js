import React, { useState } from "react";
import Select from "react-select";
import styles from "./Realestate.module.css";
import DatePicker from "react-date-picker";

export default function SearchHeader({ onUpdateFilter, onClearFilter }) {
    const [location, setLocation] = useState(undefined);
    const [price, setPrice] = useState(undefined);
    const [propertyType, setPropertyType] = useState(null);
    const [moveInDate, setMoveInDate] = useState(new Date());

    const onClear = () => {
        setLocation(undefined);
        setMoveInDate(new Date());
        setPropertyType(null);
        setPrice(undefined);
        onClearFilter();
    };
    const clickHandker = () => {
        onUpdateFilter({
            location,
            price,
            propertyType,
            moveInDate
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.serchContainer}>
                <Select
                    className={styles.marginVertical}
                    defaultValue={location}
                    onChange={setLocation}
                    options={[
                        { value: "Usa", label: "Usa" },
                        { value: "India", label: "India" },
                        { value: "Bali", label: "Bali" }
                    ]}
                />
                <div className={styles.separator} />
                <div>
                    <DatePicker
                        onChange={setMoveInDate}
                        className={[styles.marginVertical, styles.date]}
                        value={moveInDate}
                    />
                </div>
                <div className={styles.separator} />
                <Select
                    className={styles.marginVertical}
                    defaultValue={price}
                    onChange={setPrice}
                    options={[
                        { value: "$1000-$1500", label: "$1000-$1500" },
                        { value: "$1500-$2000", label: "$1500-$2000" },
                        { value: "$2000-$3000", label: "$2000-$3000" }
                    ]}
                />
                <div className={styles.separator} />
                <Select
                    className={styles.marginVertical}
                    defaultValue={propertyType}
                    onChange={setPropertyType}
                    options={[
                        { value: "Apartment", label: "Apartment" },
                        { value: "Bunglow", label: "Bunglow" },
                        { value: "Villa", label: "Villa" },
                        { value: "Flat", label: "Flat" }
                    ]}
                />
                <div className={styles.separator} />
                <div className={styles.marginVertical}>
                    <button className={styles.btn} onClick={clickHandker}>
                        Search
                    </button>
                </div>
                <div className={styles.separator} />
                <div className={styles.marginVertical}>
                    <button className={styles.btn} onClick={onClear}>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
}
