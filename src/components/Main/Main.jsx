import React, { useState } from 'react';
import './Main.css';
import chosenMarker from '../../assets/marker-chosen.png';
import emptyMarker from '../../assets/marker-empty.png';
import iButton from '../../assets/i-button.png';
import preview from '../../assets/images/preview.jpg'
import checkBox from '../../assets/blue-checkbox.png';
import { Characteristics } from './Characteristics/Characteristics';
import { InfoPage } from './InfoPage/InfoPage';


export const Main = (props) => {

    const [isInfoVisible, setInfoVisibility] = useState(false);
    const [pictureNumber, setPictureNumber] = useState(1);
    const [temperature, setTemperature] = useState(1);

    const onVisibilityChange = () => {
        setInfoVisibility(!isInfoVisible)
    };

    return (
        <div className='main'>

            <div className='leftSection'>
                <div className='mainPicture'>
                    <img src={require(`../../assets/images/main-picture-${pictureNumber}-${temperature}.jpg`)} alt="" />
                    <div className='markers'>
                        <img src={pictureNumber === 1 ? chosenMarker : emptyMarker} alt="" onClick={() => { setPictureNumber(1) }} />
                        <img src={pictureNumber === 2 ? chosenMarker : emptyMarker} alt="" onClick={() => { setPictureNumber(2) }} />
                        <img src={pictureNumber === 3 ? chosenMarker : emptyMarker} alt="" onClick={() => { setPictureNumber(3) }} />
                    </div>
                </div>
            </div>

            <div className='rightSection'>
                <Characteristics />

                <div className='chooseLightTemp'>

                    <div className='sectionHeader'>
                        <div className='iButton' onClick={onVisibilityChange}>
                            <img src={iButton} alt="" />
                        </div>
                        <div className='iButtonDesctiption'>
                            <span>Выберите цвет свечения</span>
                        </div>
                    </div>

                    <div className='previewPicturesArea'>
                        <div className='previewPictures'>
                            <div className={temperature === 1 ? 'preview chosen' : 'preview'} onClick={() => { setTemperature(1) }}>
                                <img src={preview} alt="" />
                                <p>Теплый</p>
                                {
                                    temperature === 1 ?
                                        <div className='checkBox'>
                                            <img src={checkBox} alt="" />
                                        </div>
                                        : null
                                }
                            </div>
                            <div className={temperature === 2 ? 'preview chosen' : 'preview'} onClick={() => { setTemperature(2) }}>
                                <img src={preview} alt="" />
                                <p>Дневной</p>
                                {
                                    temperature === 2 ?
                                        <div className='checkBox'>
                                            <img src={checkBox} alt="" />
                                        </div>
                                        : null
                                }
                            </div>
                            <div className={temperature === 3 ? 'preview chosen' : 'preview'} onClick={() => { setTemperature(3) }}>
                                <img src={preview} alt="" />
                                <p>Холодный</p>
                                {
                                    temperature === 3 ?
                                        <div className='checkBox'>
                                            <img src={checkBox} alt="" />
                                        </div>
                                        : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                isInfoVisible ?
                    <InfoPage onVisibilityChange={onVisibilityChange}/>
                    : null
            }

        </div>
    )
}