function calculateNumbers(var1, var2) {
  return var1 + var2;
}
function createSelectBox(options, inputElementId) {
    // Create select element
    var select = document.createElement('select');

    // Create options
    options.forEach(function(option) {
        var opt = document.createElement('option');
        opt.value = option.value;
        opt.text = option.text;
        select.appendChild(opt);
    });

    // Handle change event
    select.addEventListener('change', function() {
        var inputElement = document.getElementById(inputElementId);
        if (inputElement) {
            inputElement.value = this.value;
        }
    });

    // Append select to body
    document.body.appendChild(select);
}
function create2dmatrix(rows, columns) {
    var matrix = [];
    for (var i = 0; i < rows; i++) {
        matrix[i] = [];
        for (var j = 0; j < columns; j++) {
            matrix[i][j] = i + j;
        }
    }
    return matrix;
}
function displayMonths() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (var i = 0; i < months.length; i++) {
        console.log(months[i]);
    }
}

displayMonths();
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
}z