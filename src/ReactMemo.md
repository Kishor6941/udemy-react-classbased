Users enjoy fast and responsive user interfaces (UI). An UI response delay of less than 100 milliseconds feels instant to the user. A delay between 100 and 300 milliseconds is already perceptible.

To improve user interface performance, React offers a higher-order component React.memo(). When React.memo() wraps a component, React memoizes the rendered output then skips unnecessary rendering.

This post describes the situations when React.memo() improves the performance, and, not less important, warns when its usage is useless.

##When deciding to update DOM, React first renders your component, then compares the result with the previous render result. If the render results are different, React updates the DOM.

Current vs previous render results comparison is fast. But you can speed up the process under some circumstances.

When a component is wrapped in React.memo(), React renders the component and memoizes the result. Before the next render, if the new props are the same, React reuses the memoized result skipping the next rendering.

export function Movie({ title, releaseDate }) {
return (

<div>
<div>Movie title: {title}</div>
<div>Release date: {releaseDate}</div>
</div>
);
}

export const MemoizedMovie = React.memo(Movie);

React.memo(Movie) returns a new memoized component MemoizedMovie. It will output the same content as the original Movie component, but with one difference.

MemoizedMovie render output is memoized. The memoized content is reused as long as title or releaseDate props are the same on next renderings.
