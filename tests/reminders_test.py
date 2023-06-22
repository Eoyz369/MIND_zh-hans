import unittest

from backend.reminders import filter_function, ReminderHandler

class Test_Reminder_Handler(unittest.TestCase):
	def test_starting_stopping(self):
		context = 'test'
		instance = ReminderHandler(context)
		self.assertIs(context, instance.context)

	def test_filter_function(self):
		p = {
			'title': 'TITLE',
			'text': 'TEXT'
		}
		for test_case in ('', 'title', 'ex'):
			self.assertTrue(filter_function(test_case, p))
		for test_case in (' ', 'Hello'):
			self.assertFalse(filter_function(test_case, p))

