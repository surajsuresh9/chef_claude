import { useState } from 'react';
import './App.css'
import { HfInference } from '@huggingface/inference'
import ReactMarkdown from 'react-markdown';
import { BounceLoader } from "react-spinners";

const App = () => {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState();
    const [loading, setLoading] = useState(false); // start false

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get("ingredient");
        setIngredients([...ingredients, newIngredient]);
        e.target.reset();
    }

    const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);

    async function getRecipeFromMistral() {
        const SYSTEM_PROMPT = "You are a helpful chef who suggests recipes based on given ingredients.";
        const ingredientsString = ingredients.join(", ");
        try {
            setLoading(true); // show spinner
            const response = await hf.chatCompletion({
                model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
                provider: 'together',
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
                ],
                max_tokens: 1024,
            });
            const data = response.choices[0].message.content;
            setRecipe(data);
        } catch (err) {
            console.error(err.message);
        } finally {
            setLoading(false); // hide spinner
        }
    }

    return (
        <>
            <div className="container">
                <header>
                    <img src="../../img/chef-claude-icon.png" alt="chef_icon" />
                    <span>Chef Claude</span>
                </header>

                <main>
                    <div className="search">
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="ingredient" placeholder="e.g oregano" />
                            <button>+ Add ingredient</button>
                        </form>
                    </div>

                    <div className="ingredients">
                        <h3>Ingredients on hand:</h3>
                        <ul>
                            {ingredients.map(i => <li key={i}>{i}</li>)}
                        </ul>
                    </div>

                    {ingredients.length > 0 && (
                        <div className="recipe">
                            <div className="text">
                                <p>Ready for a recipe?</p>
                                <span>Generate a recipe from your list of ingredients</span>
                            </div>
                            <button onClick={getRecipeFromMistral}>Get a recipe</button>
                        </div>
                    )}

                    {loading && (
                        <div className="spinner">
                            <BounceLoader color="#36d7b7" />
                        </div>
                    )}

                    {!loading && recipe && (
                        <section className="ai-markdown">
                            <ReactMarkdown
                                components={{
                                    li: ({ node, ...props }) => (
                                        <li style={{ fontWeight: "400" }} {...props} />
                                    ),
                                    strong: ({ node, ...props }) => (
                                        <strong style={{ fontWeight: "800", color: "#222" }} {...props} />
                                    ),
                                }}
                            >
                                {recipe}
                            </ReactMarkdown>
                        </section>
                    )}
                </main>
            </div>

            <footer>
                &copy; 2025 Suraj Suresh. All rights reserved
            </footer>
        </>
    );
};

export default App;
