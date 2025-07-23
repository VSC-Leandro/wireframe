import React from 'react';

// --- Base Icon Wrapper ---
export const Icon = ({ children, className = '', style = {} }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) => <svg viewBox="0 0 24 24" width="24" height="24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>{children}</svg>;

// --- Individual Icons ---
export const UserIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></Icon>;
export const EditIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></Icon>;
export const SaveIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></Icon>;
export const StarIcon = ({ fill = "currentColor", className = "" }) => <svg viewBox="0 0 24 24" width="16" height="16" fill={fill} stroke="none" className={className}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>;
export const GuidesIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></Icon>;
export const EventsIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="m9 16 2 2 4-4"></path></Icon>;
export const TrailIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M19 9.5V5a2 2 0 0 0-2-2H9.51" /><path d="M5 14.5V19a2 2 0 0 0 2 2h4.5" /><path d="M14.5 5H16a2 2 0 0 1 2 2v1.5" /><path d="M9.5 19H8a2 2 0 0 1-2-2v-1.5" /><path d="M12 14v-4" /><path d="m15 12-3-3-3 3" /></Icon>;
export const FriendsIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></Icon>;
export const TreeRingIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></Icon>;
export const ImageIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></Icon>;
export const BackIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><polyline points="15 18 9 12 15 6"/></Icon>;
export const PlantIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M14 20c-5.5-2.5-.8-6.4-3-10"/><path d="M12 10V2"/><path d="m7 5 3.13 1.5a1 1 0 0 0 1.14-.32L12 5l.73 1.18a1 1 0 0 0 1.14.32L17 5"/></Icon>;
export const WrenchIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></Icon>;
export const PauseIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></Icon>;
export const PlusIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></Icon>;
export const SearchIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></Icon>;

// --- Event & Category Icons ---
export const JusticeIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></Icon>;
export const PaletteIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></Icon>;
export const CircularEconomyIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></Icon>;
export const RightArrowIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></Icon>;
export const MapPinIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></Icon>;
export const CloseIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></Icon>;

// --- Map Report Icons ---
export const FireIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M12 22c5.25 0 9.5-4.25 9.5-9.5S17.25 3 12 3 2.5 7.25 2.5 12.5 6.75 22 12 22z"/><path d="M10.29 10.71C10.13 11.23 10 11.78 10 12.33c0 1.2.54 2.28 1.38 3.02.6.54 1.33.84 2.12.84.55 0 1.08-.13 1.57-.37M12 10.5c-1.17 0-2.25.54-2.91 1.38-.4.5-.64 1.12-.64 1.78 0 .85.4 1.63 1.05 2.18"/></Icon>;
export const FloodIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM7 12s2-4 5-4 5 4 5 4-2 4-5 4-5-4-5-4zm5 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></Icon>;
export const DeforestationIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line><path d="M10 10.5V2m0 8.5c-2 .5-4 1-4 3s2 2.5 4 3c2-.5 4-1 4-3s-2-2.5-4-3z"/></Icon>;

// --- Badge Icons ---
export const BadgeMountainIcon = ({ className = '', style = {} }) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
        <rect width="64" height="64" rx="16" fill="#E6E4F8"/>
        <path d="M24.5 52L32 38L39.5 52H24.5Z" fill="#605C8D"/>
        <path d="M19 52L27 37L35 52H19Z" fill="#807BAA"/>
        <path d="M38 27L38 22L42 24.5L38 27Z" fill="#605C8D"/>
        <line x1="38" y1="27" x2="38" y2="38" stroke="#605C8D" strokeWidth="2"/>
        <circle cx="23" cy="33" r="2" fill="white" fillOpacity="0.7"/>
        <circle cx="43" cy="35" r="3" fill="white" fillOpacity="0.7"/>
    </svg>
);

export const BadgeScopeIcon = ({ className = '', style = {} }) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
        <rect width="64" height="64" rx="16" fill="#D7EEF9"/>
        <g transform="rotate(-30, 34, 34) translate(0, 4)">
            <rect x="22" y="32" width="12" height="10" fill="#A9B4C9" />
            <path d="M28 32L36 20H46L42 32H28Z" fill="#4B9BC1" />
            <path d="M38 20L41 15H49L47 20H38Z" fill="#3E6B84" />
        </g>
    </svg>
);

export const BadgeBulbIcon = ({ className = '', style = {} }) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
        <rect width="64" height="64" rx="16" fill="#D9F8E9"/>
        <g transform="translate(0, 2)">
            <g fill="#50B485">
                <path d="M32 24C27.5817 24 24 27.5817 24 32C24 34.7067 25.5 37.4312 28 39V42H36V39C38.5 37.4312 40 34.7067 40 32C40 27.5817 36.4183 24 32 24Z"/>
                <rect x="29" y="42" width="6" height="3" rx="1.5"/>
            </g>
            <path d="M25.7574 32.7574C25.3668 32.3668 25.3668 31.7337 25.7574 31.3431L29.3431 27.7574C29.7337 27.3668 30.3668 27.3668 30.7574 27.7574L31.4645 28.4645C31.855 28.855 31.855 29.4882 31.4645 29.8787L27.8787 33.4645C27.4882 33.855 26.855 33.855 26.4645 33.4645L25.7574 32.7574Z" fill="#9CF3C4"/>
            <path d="M22 27L24 26L25 24L26 26L28 27L26 28L25 30L24 28L22 27Z" fill="#50B485"/>
            <path d="M42 30L40 29.5L39.5 27.5L39 29.5L37 30L39 30.5L39.5 32.5L40 30.5L42 30Z" fill="#50B485"/>
        </g>
    </svg>
);

export const FilledUserIcon = ({ className = '', style = {} }) => (
    <svg viewBox="0 0 24 24" width="24" height="24" className={className} style={style} fill="currentColor" stroke="none">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
    </svg>
);