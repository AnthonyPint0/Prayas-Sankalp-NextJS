import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import TwoColumnSection from '@/components/TwoColumnSection';
import { FaUserGroup } from 'react-icons/fa6';
import StatCard from '@/components/StatCard';

export default function HomePage() {
    return (
        <div className="h-full w-screen">
            {/* Hero Section */}
            <section className="relative bg-white font-inter h-[400px] py-6 px-4 md:px-12 overflow-hidden flex items-center shadow-md">
                {/* Small screen background */}
                <div className="absolute inset-0 block md:hidden z-0 opacity-10">
                    <Image
                        src="/hero-section-img.png"
                        alt="Background showing community support"
                        fill
                        className="object-cover w-full h-full mix-blend-multiply"
                    />
                </div>

                {/* Content */}
                <div className="relative z-[1] flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl mx-auto gap-10">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6">
                        <h2 className="font-semibold text-3xl">
                            Empowering Communities,
                        </h2>
                        <h2 className="font-semibold text-xl text-font_secondary">
                            One Prayaas at a Time.
                        </h2>
                        <p className="text-sm font-medium text-gray-700 max-w-md">
                            Join us in making a lasting impact. Your generosity
                            fuels our mission, creating positive change and
                            fostering a sense of togetherness in every Prayaas.
                        </p>
                        <Button
                            href="/login"
                            text="Register"
                            withIcon={false}
                        />
                    </div>

                    <div className="hidden md:flex md:w-1/2 justify-center">
                        <Image
                            src="/hero-section-img.png"
                            alt="Hero community image"
                            width={500}
                            height={300}
                            className="w-full max-w-lg h-auto mix-blend-multiply"
                        />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="w-full font-inter flex flex-col justify-center items-center gap-6 px-4 py-8 overflow-hidden">
                <h2 className="font-semibold text-2xl">Our Services</h2>
                {/* Scrollable cards */}
                <div className="w-full overflow-x-auto rounded-md scrollbar-hide h-[400px]">
                    <div className="flex w-full md:justify-center gap-4 px-1">
                        <ServiceCard
                            imageSrc="/marketplace_png.png"
                            alt="Goods Marketplace illustration"
                            title="Goods Marketplace"
                            description="Explore a variety of refurbished and original products in our Goods Marketplace. Shop affordably and sustainably while contributing to our mission of community empowerment."
                            buttonText="Go to Market"
                            link="/login"
                        />
                        <ServiceCard
                            imageSrc="/fooddrive_png.png"
                            alt="Food Drive illustration"
                            title="Food Drive"
                            description="Join our Food Drive initiative to donate or sell excess or genuine food and consumable items. Make a difference by sharing resources with those in need."
                            buttonText="Enter the Feast"
                            link="/login"
                        />
                        <ServiceCard
                            imageSrc="/community_png.png"
                            alt="Community Partnerships illustration"
                            title="Community Partnerships"
                            description="Collaborate with us to amplify the impact. Our Community Partnerships program invites organizations and individuals to join hands for shared success."
                            buttonText="Join Us"
                            link="/login"
                        />
                    </div>
                </div>

                {/* About Section */}
                <TwoColumnSection
                    imageSrc="/mission_img.png"
                    imageAlt="Mission image"
                    title="Our Mission At Prayas-Sankalp"
                    description="At Prayaas-Sankalp, our mission is to empower individuals and communities through collective efforts, fostering positive change, and building a sustainable future. We strive to create a platform where generosity meets impact, where every contribution, whether big or small, makes a meaningful difference in the lives of others. Together, we aim to create a world where compassion and collaboration drive positive transformation, making our communities stronger, healthier, and more resilient."
                />

                {/* Volunteer Section */}
                <TwoColumnSection
                    imageSrc="/group_img.png"
                    imageAlt="Join Us image"
                    title="Join us in our Journey"
                    description="Join the Prayaas-Sankalp Movement! Be a Volunteer, Be the Change. Your time, skills, and passion can make a lasting impact. Together, let's create a world of sustainability, compassion, and positive change. Sign up now and be part of something meaningful!"
                    imageFirst
                >
                    <Button href="/" text="Become a Volunteer" />
                </TwoColumnSection>

                {/* Collaborate Section */}
                <TwoColumnSection
                    imageSrc="/joint_effort_img.png"
                    imageAlt="Collaborate image"
                    title="Collaborate with Us"
                    description="Prayaas-Sankalp extends an open invitation to organizations and communities seeking to make a tangible difference. Through collaborative efforts, we aim to address societal challenges, foster positive change, and build resilient communities. By partnering with us, you'll join a network of dedicated individuals and organizations committed to creating sustainable solutions and uplifting those in need. Together, we can amplify our impact, empower communities, and create a brighter, more inclusive future for all."
                >
                    <Button href="/" text="Partner with Us" />
                </TwoColumnSection>

                <div className="bg-white rounded shadow-md w-full flex flex-col justify-around gap-6 font-inter px-4 py-8 overflow-hidden">
                    <h2 className="font-semibold text-2xl text-black">
                        Help the community{' '}
                        <span className="text-font_secondary">grow</span>
                    </h2>
                    <p className="font-medium text-sm">
                        Support our cause through donations. Whether it&#39;s
                        clothes, books, food donation or monetary contributions,
                        your generosity helps us reach more people and make a
                        difference in their lives. Contribute to a brighter
                        future.
                    </p>
                    <div className="w-full overflow-x-auto rounded-md scrollbar-hide">
                        <div className="flex w-full md:justify-center gap-4 px-1">
                            <StatCard
                                icon={FaUserGroup}
                                count={30}
                                label="Members"
                                title="Community Strength"
                                description="Our vibrant community grows stronger with each new member joining us."
                            />
                            <StatCard
                                imageSrc="/donation_icon.png"
                                imageAlt="Donation"
                                count={48}
                                label="Product Donated"
                                title="Giving Spirit"
                                description="Celebrate our collective generosity with every donation made to support our cause."
                            />
                            <StatCard
                                imageSrc="/salad_icon.png"
                                imageAlt="Salad"
                                count={103}
                                label="People Feed"
                                title="Nourishing Lives"
                                description="Together, we nourish countless lives through our efforts in feeding those in need."
                            />
                            <StatCard
                                imageSrc="/volunteers_icon.png"
                                imageAlt="Volunteers"
                                count={27}
                                label="Volunteers"
                                title="Volunteer Force"
                                description="Our dedicated volunteer force drives positive change and empowers communities."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
