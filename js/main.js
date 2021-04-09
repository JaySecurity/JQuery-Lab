const $ul = $('ul');
const $skillInput = $('#new-skill');

let skillsList = localStorage.getItem('skillsList');

if (skillsList) {
  skillsList = JSON.parse(skillsList);
  skillsList.forEach((skill) => {
    $ul.append('<li><button class="del-btn">X</button>' + skill + '</li>');
  });
} else {
  skillsList = [];
}

$('#new-skill').keypress(function (e) {
  if (e.which == 13) handleAdd();
});

$('#add-skill').on('click', handleAdd);
$('.del-btn').on('click', handleDelete);

function handleAdd(e) {
  if ($skillInput.val()) {
    let $newLi = $(
      `<li><button class="del-btn">X</button>${$skillInput.val()}</li>`
    );
    $newLi.on('click', '.del-btn', handleDelete);
    $ul.append($newLi);
    skillsList.push($skillInput.val());
    localStorage.setItem('skillsList', JSON.stringify(skillsList));
    $skillInput.val('');
  }
}

function handleDelete(e) {
  let currentContent = $(this).closest('li')[0].textContent;
  currentContent = currentContent.substring(1);
  skillsList.splice(skillsList.indexOf(currentContent), 1);
  $(this).closest('li').remove();
  localStorage.setItem('skillsList', JSON.stringify(skillsList));
}
