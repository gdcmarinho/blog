export default function Contact() {
    return (
        <div className="w-full mx-auto max-w-screen-sm p-4">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <p className="mb-8 text-stone-400">If you have any questions, feel free to reach out!</p>
            <form name="contact" netlify className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-1">
                        Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full p-3 bg-stone-800 border border-stone-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-1">
                        Email:
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full p-3 bg-stone-800 border border-stone-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-300 mb-1">
                        Message:
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        required
                        rows="4"
                        className="w-full p-3 bg-stone-800 border border-stone-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white"
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className="cursor-pointer w-full py-2 px-4 bg-stone-700 hover:bg-stone-600 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-offset-2 focus:ring-offset-stone-900 transition duration-150 ease-in-out"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}
