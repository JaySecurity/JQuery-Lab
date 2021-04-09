// const $addSkillBtn = $('#add-skill');
const $ul = $('ul');
const $skillInput = $('#new-skill');

let skillsList = localStorage.getItem('skillsList');

if (skillsList) {
  skillsList = JSON.parse(skillsList);
  skillsList.forEach((skill) => {
    $ul.append('<li><button class="del-btn">X</button>' + skill + '</li>');
    $('li').on('click', handleDelete);
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
    $ul.append('<li><button>X</button>' + $skillInput.val() + '</li>');
    $('li').on('click', handleDelete);
    skillsList.push($skillInput.val());
    localStorage.setItem('skillsList', JSON.stringify(skillsList));
    $skillInput.val('');
  }
}

function handleDelete() {
  let currentContent = $(this).closest('li')[0].textContent;
  currentContent = currentContent.substring(1);
  console.clear();
  console.log(currentContent);
  console.log(skillsList, skillsList.indexOf(currentContent));
  skillsList.splice(skillsList.indexOf(currentContent), 1);
  console.log(skillsList);
  $(this).closest('li').remove();
  localStorage.setItem('skillsList', JSON.stringify(skillsList));
}
