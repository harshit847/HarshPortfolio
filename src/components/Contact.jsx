import React from "react";

const ContactSection = () => {
    return (
        <div className="bg-zinc-800 rounded-xl text-white py-10 px-5">
            <div className="max-w-7xl mx-auto text-center space-y-4">
                <h2 className="text-2xl font-semibold">Let's Connect</h2>
                <p className="max-w-xl mx-auto text-sm">
                    Have a project in mind or just want to say hi? Feel free to reach out
                    via email or connect with me on social media.
                </p>

                <div className="flex justify-center gap-4 mt-4">
                    <a href="mailto:harshitrai331@gmail.com" className="underline hover:text-white transition">
                        harshitrai331@gmail.com
                    </a>
                    <span>|</span>
                    <a href="https://github.com/harshit847" target="_blank" className="underline hover:text-white transition">
                        GitHub
                    </a>
                    <span>|</span>

                    <a href="https://www.linkedin.com/in/harshit-rai-576617274/" target="_blank" className="underline hover:text-white transition">
                        LinkedIn
                    </a>
                    <span>|</span>

                    <a href="https://www.instagram.com/harshit_rai_953" target="_blank" className="underline hover:text-white transition">
                        Instagram
                    </a>
                    <span>|</span>

                    <a href="https://leetcode.com/u/harsh_it22b0131203/" target="_blank" className="underline hover:text-white transition">
                        Leetcode
                    </a>



                </div>

                <p className="text-xs text-white pt-6">
                    © {new Date().getFullYear()} Harshit Rai. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default ContactSection;
