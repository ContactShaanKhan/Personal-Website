import LoadingIcon from '../../Misc/loadingIcon';

export default function ContactFormOverlay() {
    return (
        <div style={{
            position: 'relative',
            marginLeft: "10%",
            backgroundColor: 'rgba(0, 0 , 0, 0.65)',
            borderRadius: "10px",
            boxShadow: 25,
            width: "600px",
            height: "650px",
            p: 4,
            transform: 'translate(0px, -650px)',
        }}
        >
            <div style={{
                position: "relative",
                width: "57px",
                height: "57px",
                left: "calc(50% - 50px)",
                top: "calc(50% - 50px)"
            }}>
                <LoadingIcon />
            </div>
        </div>
    )
}