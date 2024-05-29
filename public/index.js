import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('Type markdown here');

    return (
        <div>
            <textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
            />

            <ReactMarkdown children={markdown} />
        </div>
    );
}
function reverseAndCapitalize(sentence) {
    // Reverse the sentence
    let reversed = sentence.split(' ').reverse().join(' ');

    // Capitalize the first letter and return
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
}

console.log(reverseAndCapitalize("hello world")); // Outputs: "World hello"
const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
];

const names = data.reduce((acc, group) => {
    const groupNames = group.map(person => person.name);
    return [...acc, ...groupNames];
}, []);

console.log(names); // Outputs: ["John", "Jane", "Bob"]

