import React from 'react';
import { UserHeader } from '../components/UserHeader';
import { StarIcon, PlusIcon } from '../components/icons';

interface TrailScreenProps {
    userName: string;
    userImage: string | null;
}

export const TrailScreen: React.FC<TrailScreenProps> = ({ userName, userImage }) => (
    <div className="screen trail-screen">
        <UserHeader rank={1} userName={userName} userImage={userImage} />
        <div className="trail-map-container">
            <div className="trail-node node-1"><span className="node-core"></span></div>
            <div className="trail-node node-2"><span className="node-core"></span></div>
            <div className="trail-node node-3"><span className="node-core"></span></div>
            <div className="trail-node node-4"><span className="node-core"></span></div>
            <div className="trail-node node-5"><span className="node-core"></span></div>

            <div className="trail-branch branch-1"></div>
            <div className="trail-branch branch-2"></div>
            <div className="trail-branch branch-3"></div>
            <div className="trail-branch branch-4"></div>
            <div className="trail-branch branch-5"></div>

            <div className="trail-reward reward-1">
                <StarIcon fill="#6A7A9E" />
                <span>Recompensas</span>
            </div>
             <div className="trail-reward reward-2">
                <StarIcon fill="#6A7A9E" />
                <span>Saberes</span>
            </div>
            
            <div className="trail-add-node">
                <PlusIcon />
            </div>
        </div>
    </div>
);
