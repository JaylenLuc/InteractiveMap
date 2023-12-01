import pytest
pytestmark = pytest.mark.django_db

class TestState : 
    def test_state(self, state_factory):
        state = state_factory()
        assert state.__str__() == "teststate"