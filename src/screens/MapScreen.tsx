import React, { useState, useEffect } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import { UserHeader } from '../components/UserHeader';
import { PlusIcon, FireIcon, FloodIcon, DeforestationIcon, CloseIcon } from '../components/icons';
import type { Report } from '../types';

// Componente auxiliar para centralizar o mapa na posição do usuário
const ChangeView: React.FC<{ center: L.LatLng, zoom: number }> = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

// Ícone personalizado para a localização do usuário
const userLocationIcon = new L.DivIcon({
  className: 'user-location-marker',
  iconSize: [20, 20]
});

// Função para obter o ícone de reporte com base no tipo
const getReportIcon = (type: Report['type']) => {
  const IconComponent = {
    'Queimada': FireIcon,
    'Desmatamento': DeforestationIcon,
    'Enchente': FloodIcon
  }[type];

  // Renderiza o componente React de ícone para uma string HTML.
  // A rotação é necessária para alinhar o ícone dentro do pino do marcador.
  const iconSVG = renderToStaticMarkup(
      <IconComponent style={{ transform: 'rotate(45deg)', width: '20px', height: '20px', color: 'white' }} />
  );

  const iconHtml = `
    <div class="report-marker-icon report-marker-${type.toLowerCase()}">
      ${iconSVG}
    </div>
  `;

  return new L.DivIcon({
    html: iconHtml,
    className: '', // A classe principal já está no HTML
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  });
};

interface MapScreenProps {
    userName: string;
    userImage: string | null;
}

export const MapScreen: React.FC<MapScreenProps> = ({ userName, userImage }) => {
    const [position, setPosition] = useState<L.LatLng | null>(null);
    const [reports, setReports] = useState<Report[]>([]);
    const [isReportModalOpen, setReportModalOpen] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("Geolocalização não é suportada pelo seu navegador.");
            return;
        }

        const watchId = navigator.geolocation.watchPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                const newPos = L.latLng(latitude, longitude);
                setPosition(newPos);
                setError(null);
            },
            (err) => {
                if (err.code === err.PERMISSION_DENIED) {
                    setError("Permissão de localização negada. Funcionalidades limitadas.");
                } else {
                    setError("Não foi possível obter a sua localização.");
                }
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    const handleReport = (type: Report['type']) => {
        if (position) {
            const newReport: Report = {
                id: Date.now(),
                position: [position.lat, position.lng],
                type: type,
                timestamp: new Date().toISOString()
            };
            setReports(prev => [...prev, newReport]);
            setReportModalOpen(false);
        } else {
            alert("Sua localização atual é necessária para fazer um reporte.");
        }
    };
    
    const defaultCenter: LatLngExpression = [-22.9068, -43.1729]; // Rio de Janeiro

    const reportTypes: { name: Report['type'], Icon: React.FC<any> }[] = [
        { name: 'Queimada', Icon: FireIcon },
        { name: 'Desmatamento', Icon: DeforestationIcon },
        { name: 'Enchente', Icon: FloodIcon },
    ];

    return (
        <div className="screen map-screen">
            <UserHeader rank={1} userName={userName} userImage={userImage} />
            <div className="map-container">
                {error && <div className="map-error-banner">{error}</div>}
                <MapContainer center={position || defaultCenter} zoom={13} className="leaflet-container">
                    {position && <ChangeView center={position} zoom={15} />}
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    />
                    {position && (
                        <Marker position={position} icon={userLocationIcon}>
                            <Popup>Você está aqui!</Popup>
                        </Marker>
                    )}
                    {reports.map(report => (
                        <Marker key={report.id} position={report.position} icon={getReportIcon(report.type)}>
                            <Popup>
                                <strong>Reporte de {report.type}</strong><br />
                                <span>Em {new Date(report.timestamp).toLocaleString()}</span>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>

                <button 
                  className="report-fab" 
                  onClick={() => setReportModalOpen(true)}
                  disabled={!position}
                  title={!position ? "Aguardando localização para reportar" : "Reportar incidente"}
                >
                    <PlusIcon />
                </button>

                {isReportModalOpen && (
                    <div className="report-modal-overlay">
                        <div className="report-modal">
                            <div className="report-modal-header">
                                <h2>Reportar Incidente</h2>
                                <button onClick={() => setReportModalOpen(false)} className="close-modal-btn">
                                    <CloseIcon />
                                </button>
                            </div>
                            <div className="report-options-grid">
                                {reportTypes.map(({ name, Icon }) => (
                                    <button key={name} className="report-option-btn" onClick={() => handleReport(name)}>
                                        <Icon />
                                        <span>{name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};