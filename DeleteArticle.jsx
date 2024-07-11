// ./src/components/DeleteArticle.jsx

import { useEffect, useState } from "react";

const DeleteArticle = () => {
	const [articles, setArticles] = useState([]);
	const [deleted, setDelete] = useState(true);

	useEffect(() => {
		// Fetch articles from backend when component mounts
		fetch("http://localhost:5000/api/articles")
			.then((response) => response.json())
			.then((data) => setArticles(data))
			.catch((error) =>
				console.error("Error fetching articles:", error)
			);
	}, [deleted]);

	const handleDelete = async (articleid) => {
		try {
			const response = await fetch(
				`http://localhost:5000/api/articles/${articleid}`,
				{
					method: "DELETE",
				}
			);

			if (!response.ok) {
				throw new Error("Failed to delete article");
			}

			alert("Article deleted");
			setDelete(!deleted);
		} catch (error) {
			console.error("Error deleting article:", error);
		}
	};

	return (
		<div id="tbl-head">
			<h1>Articles</h1>
			<table id="tbl">
				<thead>
					<tr>
						<th>Title</th>
						<th>Category</th>
						<th>Author</th>
						<th>Date</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{articles.map((article) => (
						<tr key={article._id}>
							<td>{article.title}</td>
							<td>{article.category}</td>
							<td>{article.author}</td>
							<td>{new Date(article.createdAt).toLocaleDateString()}</td>
							<td>
								<button
									className="dl-btn"
									onClick={() => handleDelete(article._id)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DeleteArticle;
