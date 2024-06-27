function showAdd(type) {
	const default_service = getLocalStorage('default_service')['default_service'];
	inputs.template.value = '0';
	inputs.title.value = '';
	inputs.text.value = '';
	inputs.time.value = '';
	inputs.notification_service.querySelectorAll('input[type="checkbox"]')
		.forEach(c => c.checked = false);
	inputs.notification_service.querySelector(
		`input[type="checkbox"][data-id="${default_service}"]`
	).checked = true;
	document.querySelectorAll('.weekday-bar > input[type="checkbox"]')
		.forEach(el => el.checked = false);
	toggleNormal();
	selectColor(colors[0]);
	inputs.color_toggle.checked = false;
	document.getElementById('test-reminder').classList.remove('show-sent');

	const cl = document.getElementById('info').classList;
	cl.forEach(c => {
		if (InfoClasses.includes(c)) cl.remove(c)
	});

    // 设置按钮和测试提醒的文本内容
    const submitButton = document.querySelector('.options > button[type="submit"]');
    submitButton.innerText = '添加';
    submitButton.setAttribute('data-lang', 'button_Add');

    const testReminderDiv = document.querySelector('#test-reminder > div:first-child');
    testReminderDiv.innerText = '测试';
    testReminderDiv.setAttribute('data-lang', 'button_Test');

	const title = document.querySelector('#info h2');

	if (type === Types.reminder) {
		cl.add('show-add-reminder');
		title.setAttribute('data-lang', 'show-add-reminder');
		title.innerText = '添加提醒';
		inputs.time.setAttribute('required', '');
	} else if (type === Types.template) {
		cl.add('show-add-template');
		title.innerText = '添加模板';
		title.setAttribute('data-lang', 'show-add-template');
		inputs.time.removeAttribute('required');
	} else if (type === Types.static_reminder) {
		cl.add('show-add-static-reminder');
		title.setAttribute('data-lang', 'show-add-static-reminder');
		title.innerText = '添加静态提醒';
		inputs.time.removeAttribute('required');
	} else
		return;
	showWindow('info');
};

function showEdit(id, type) {
	let url;
	if (type === Types.reminder) {
		url = `${url_prefix}/api/reminders/${id}?api_key=${api_key}`;
		inputs.time.setAttribute('required', '');
	} else if (type === Types.template) {
		url = `${url_prefix}/api/templates/${id}?api_key=${api_key}`;
		inputs.time.removeAttribute('required');
		type_buttons.repeat_interval.removeAttribute('required');
	} else if (type === Types.static_reminder) {
		url = `${url_prefix}/api/staticreminders/${id}?api_key=${api_key}`;
		document.getElementById('test-reminder').classList.remove('show-sent');
		inputs.time.removeAttribute('required');
		type_buttons.repeat_interval.removeAttribute('required');
	} else return;

	fetch(url)
		.then(response => {
			if (!response.ok) return Promise.reject(response.status);
			return response.json();
		})
		.then(json => {
			document.getElementById('info').dataset.id = id;
			inputs.color_toggle.checked = false;
			selectColor(json.result.color || colors[0]);
			inputs.title.value = json.result.title;

			if (type === Types.reminder) {
				var trigger_date = new Date(
					(json.result.time +
						new Date(json.result.time * 1000).getTimezoneOffset() *
						-60
					) * 1000
				);
				inputs.time.value =
					trigger_date.toLocaleString('en-CA').slice(0, 10) +
					'T' +
					trigger_date.toTimeString().slice(0, 5);
			};
			inputs.notification_service.querySelectorAll('input[type="checkbox"]').forEach(
				c => c.checked = json.result.notification_services.includes(parseInt(c.dataset.id))
			);

			if (type == Types.reminder) {
				if (json.result.repeat_interval !== null) {
					toggleRepeated();
					type_buttons.repeat_interval.value = json.result.repeat_interval;
					type_buttons.repeat_quantity.value = json.result.repeat_quantity;
				} else if (json.result.weekdays !== null) {
					toggleWeekDay();
					[...document.querySelectorAll('.weekday-bar > input[type="checkbox"]')]
					.map((el, index) => [el, index])
						.forEach(el => el[0].checked = json.result.weekdays.includes(el[1]))
				} else
					toggleNormal();
			};

			inputs.text.value = json.result.text;

			showWindow('info');
		})
		.catch(e => {
			if (e === 401)
				window.location.href = `${url_prefix}/`;
			else
				console.log(e);
		});

	const cl = document.getElementById('info').classList;
	cl.forEach(c => {
		if (InfoClasses.includes(c)) cl.remove(c)
	});



	const submitButton = document.querySelector('.options > button[type="submit"]');
    submitButton.innerText = '保存';
    submitButton.setAttribute('data-lang', 'button_Save');


	const title = document.querySelector('#info h2');
	const test_text = document.querySelector('#test-reminder > div:first-child');

	if (type === Types.reminder) {
		cl.add('show-edit-reminder');
		title.setAttribute('data-lang', 'show-edit-reminder');
		title.innerText = '编辑提醒';
		test_text.innerText = '测试';
	} else if (type === Types.template) {
		cl.add('show-edit-template');
		title.setAttribute('data-lang', 'show-edit-template');
		title.innerText = '编辑模板';
		test_text.innerText = '测试';
	} else if (type === Types.static_reminder) {
		cl.add('show-edit-static-reminder');
		title.setAttribute('data-lang', 'show-edit-static-reminder');
		title.innerText = '编辑静态提醒';
		test_text.innerText = '测试';
	} else
		return;
};