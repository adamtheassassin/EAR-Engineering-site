"use client";

export default function HomeMap() {
    return (
        <section className="w-full h-[400px] md:h-[500px] relative mt-0">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4023.9526587094174!2d18.820527300000002!3d-34.063464499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb5947a717cc1%3A0x6ffb176a283db73e!2sEAR%20Engineering!5e1!3m2!1sen!2sza!4v1772199538942!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale-[0.2] contrast-[1.1]"
            ></iframe>
        </section>
    );
}
