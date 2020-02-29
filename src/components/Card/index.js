import React from 'react';

import CatLeaderImg from '../../assets/Images/CATLeaderboard.png';
export default function Card({ imgSrc, alt, synopsis, tags }) {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white m-12">
            <img class="w-full" src={imgSrc} alt={alt} />
            <div class="px-6 py-4">
                <div class="text-gray-800 font-bold text-xl mb-2">{alt}</div>
                <p class="text-gray-800 text-base">
                    {synopsis}
                </p>
            </div>
            <div class="px-6 py-4">
                {tags && tags.map(tag => <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag}</span>)}
            </div>
        </div>
    )
}