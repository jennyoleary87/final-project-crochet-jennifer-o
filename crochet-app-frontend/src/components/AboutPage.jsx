import Button from "./Button";

const AboutPage = () => {
    return (
        <div>
            <section className="about">
                <div>
                    <h1>About CrochetCorner</h1>
                    <p>
                        CrochetCorner is a full-stack web application designed for personal project tracking
                        The MVP of this project was built using React, Spring Boot, and MySQL.
                        It allows users to create, read, update, and delete crochet projects along with their details.
                    </p>
                </div>
            </section>
            <section className="future-features">
                <div>
                    <h1>Future Features</h1>
                    <p>
                        In the future, we plan to enhance CrochetCorner with additional features such as:
                        <ul>
                            <li>Advanced search and filtering for projects</li>
                            <li>Attach downloadable pattern PDFs</li>
                            <li>User authentication and profiles</li>
                            <li>Journal session entries for each project</li>
                        </ul>
                        Stay tuned for updates!
                    </p>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;