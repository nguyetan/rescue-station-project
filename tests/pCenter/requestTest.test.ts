import { create } from 'apisauce';
import test from 'ava';

const requestSetup = {
  firstStation: 1,
  lastStation: 50,
  numberStation: 10,
};

const api = create({
  baseURL: 'http://localhost:5013',
  withCredentials: true,
});

test('valid request to get P-Center', async (t) => {
  const param = requestSetup;

  const result = await api.post('/findPCenter', { data: param });
  if (result.ok) {
    const data = result.data as any;
    t.deepEqual(Object.keys(data).sort(), ['selected', 'unselected'].sort());

    t.pass();
  } else {
    t.fail();
  }
});

test('test valid type PCenter', async (t) => {
  const param = requestSetup;

  const result = await api.post('/findPCenter', { data: param });

  if (result.ok) {
    const data = result.data as any;
    const { selected, unselected } = data;
    t.deepEqual(Object.keys(selected[0]).sort(), ['Id', 'FacilityPoints', 'XX', 'YY'].sort());

    const pointSelected = selected[0];
    t.is(typeof pointSelected.Id, 'number');
    t.is(typeof pointSelected.FacilityPoints, 'number');
    t.is(typeof pointSelected.XX, 'number');
    t.is(typeof pointSelected.YY, 'number');

    t.deepEqual(Object.keys(unselected[0]).sort(), ['Id', 'FacilityPoints', 'XX', 'YY'].sort());

    const pointUnselected = unselected[0];
    t.is(typeof pointUnselected.Id, 'number');
    t.is(typeof pointUnselected.FacilityPoints, 'number');
    t.is(typeof pointUnselected.XX, 'number');
    t.is(typeof pointUnselected.YY, 'number');
  } else {
    t.fail();
  }
});

test('test valid number poit result PCenter', async (t) => {
  const param = requestSetup;
  const result = await api.post('/findPCenter', { data: param });
  if (result.ok) {
    const data = result.data as any;
    t.is(data.selected.length, param.numberStation);
  } else {
    t.fail();
  }
});

test('invalid request to get P-Center', async (t) => {
  const param = requestSetup;

  const result = await api.post('/findPCenter', { param });
  if (result.ok) {
    t.fail();
  } else {
    t.pass();
  }
});
