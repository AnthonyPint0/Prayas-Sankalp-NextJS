import Image from 'next/image';

export default function Footer() {
    return (
        <div
            className={
                'w-full min-h-16 bg-primary text-white font-poppins flex justify-between items-center'
            }
        >
            <div className="ml-3 text-[10px] text-nowrap md:text-[12px] lg:text-sm underline underline-offset-2 hidden vertical_tab:flex justify-between items-center gap-1 md:gap-5">
                <p>Help Center</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>About</p>
            </div>
            <div className="flex justify-between items-center w-full vertical_tab:w-fit gap-5 mr-3">
                <div className="flex justify-between items-center gap-5 ml-2">
                    <Image
                        src="/triangle_logo.svg"
                        alt="logo.svg"
                        width={30}
                        height={23}
                        style={{ width: 'auto', height: 'auto' }}
                        priority
                    />
                    <div className="flex flex-col justify-between items-start">
                        <h3 className="font-medium text-primary-100 text-sm mobile_s:text-[16px] md:text-2xl">
                            Prayas-Sankalp
                        </h3>
                        <p className="font-light text-[8px] md:text-[12px]">
                            Rendering our service for others
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-1 justify-between items-start text-[7px]">
                    <p>Copyright © 2025 NexusWave</p>
                    <p>All rights reserved</p>
                </div>
            </div>
        </div>
    );
}
