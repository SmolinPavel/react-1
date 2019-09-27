import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import { NotificationContainer, NotificationManager } from '.';
import { oltStyles } from '../..';

describe('NotificationManager Adds Notifications', () => {
  test('renders INFO', () => {
    const { getByText, getByTestId } = render(<NotificationContainer />);
    NotificationManager.info({
      title: 'INFO!',
      content: 'Here is some information.',
    });

    getByText('INFO!');
    getByText('Here is some information.');
    const notification = getByTestId('Notification');
    expect(
      notification.classList.contains(oltStyles.Notification),
    ).toBeTruthy();
    expect(
      notification.classList.contains(oltStyles.NotificationInfo),
    ).toBeTruthy();
  });
  test('renders SUCCESS', () => {
    const { getByText, getByTestId } = render(<NotificationContainer />);
    NotificationManager.success({
      title: 'SUCCESS!',
      content: 'That was a success!',
    });

    getByText('SUCCESS!');
    getByText('That was a success!');
    const notification = getByTestId('Notification');
    expect(
      notification.classList.contains(oltStyles.Notification),
    ).toBeTruthy();
    expect(
      notification.classList.contains(oltStyles.NotificationSuccess),
    ).toBeTruthy();
  });
  test('renders WARNING', () => {
    const { getByText, getByTestId } = render(<NotificationContainer />);
    NotificationManager.warning({
      title: 'WARNING!',
      content: 'This is only a warning!',
    });

    getByText('WARNING!');
    getByText('This is only a warning!');
    const notification = getByTestId('Notification');
    expect(
      notification.classList.contains(oltStyles.Notification),
    ).toBeTruthy();
    expect(
      notification.classList.contains(oltStyles.NotificationWarning),
    ).toBeTruthy();
  });
  test('renders ERROR', () => {
    const { getByText, getByTestId } = render(<NotificationContainer />);
    NotificationManager.error({
      title: 'ERROR!',
      content: 'An error has occured!',
    });

    getByText('ERROR!');
    getByText('An error has occured!');
    const notification = getByTestId('Notification');
    expect(
      notification.classList.contains(oltStyles.Notification),
    ).toBeTruthy();
    expect(
      notification.classList.contains(oltStyles.NotificationError),
    ).toBeTruthy();
  });
});

describe('NotificationManager Click and Hide Callbacks are set properly', () => {
  test('renders INFO', () => {
    jest.useFakeTimers();
    const onHide = jest.fn();
    const onClick = jest.fn();
    const { getByText } = render(<NotificationContainer />);
    NotificationManager.info({
      title: 'INFO!',
      content: 'Here is some information.',
      onClick,
      onHide,
    });
    const notification = getByText('INFO!');
    fireEvent.click(notification);
    expect(onClick).toHaveBeenCalled();
    jest.runAllTimers();
    expect(onHide).toHaveBeenCalled();
  });
  test('renders SUCCESS', () => {
    jest.useFakeTimers();
    const onHide = jest.fn();
    const onClick = jest.fn();
    const { getByText } = render(<NotificationContainer />);
    NotificationManager.success({
      title: 'SUCCESS!',
      content: 'That was a success!',
      onClick,
      onHide,
    });
    const notification = getByText('SUCCESS!');
    fireEvent.click(notification);
    expect(onClick).toHaveBeenCalled();
    jest.runAllTimers();
    expect(onHide).toHaveBeenCalled();
  });
  test('renders WARNING', () => {
    jest.useFakeTimers();
    const onHide = jest.fn();
    const onClick = jest.fn();
    const { getByText } = render(<NotificationContainer />);
    NotificationManager.warning({
      title: 'WARNING!',
      content: 'This is only a warning!',
      onClick,
      onHide,
    });
    const notification = getByText('WARNING!');
    fireEvent.click(notification);
    expect(onClick).toHaveBeenCalled();
    jest.runAllTimers();
    expect(onHide).toHaveBeenCalled();
  });
  test('renders ERROR', () => {
    jest.useFakeTimers();
    const onHide = jest.fn();
    const onClick = jest.fn();
    const { getByText } = render(<NotificationContainer />);
    NotificationManager.error({
      title: 'ERROR!',
      content: 'An error has occured!',
      onClick,
      onHide,
    });
    const notification = getByText('ERROR!');
    fireEvent.click(notification);
    expect(onClick).toHaveBeenCalled();
    jest.runAllTimers();
    expect(onHide).toHaveBeenCalled();
  });
});

describe('NotificationManager Close and Hide Callbacks are set properly', () => {
  test('renders INFO', () => {
    jest.useFakeTimers();
    const onHide = jest.fn();
    const onClose = jest.fn();
    const { getByTestId } = render(<NotificationContainer />);
    NotificationManager.info({
      title: 'INFO!',
      content: 'Here is some information.',
      onClose,
      onHide,
    });
    const notification = getByTestId('Notification-Close');
    fireEvent.click(notification);
    expect(onClose).toHaveBeenCalled();
    jest.runAllTimers();
    expect(onHide).toHaveBeenCalled();
  });
  test('renders SUCCESS', () => {
    jest.useFakeTimers();
    const onHide = jest.fn();
    const onClose = jest.fn();
    const { getByTestId } = render(<NotificationContainer />);
    NotificationManager.success({
      title: 'SUCCESS!',
      content: 'That was a success!',
      onClose,
      onHide,
    });
    const notification = getByTestId('Notification-Close');
    fireEvent.click(notification);
    expect(onClose).toHaveBeenCalled();
    jest.runAllTimers();
    expect(onHide).toHaveBeenCalled();
  });
  test('renders WARNING', () => {
    jest.useFakeTimers();
    const onHide = jest.fn();
    const onClose = jest.fn();
    const { getByTestId } = render(<NotificationContainer />);
    NotificationManager.warning({
      title: 'WARNING!',
      content: 'This is only a warning!',
      onClose,
      onHide,
    });
    const notification = getByTestId('Notification-Close');
    fireEvent.click(notification);
    expect(onClose).toHaveBeenCalled();
    jest.runAllTimers();
    expect(onHide).toHaveBeenCalled();
  });
  test('renders ERROR', () => {
    jest.useFakeTimers();
    const onHide = jest.fn();
    const onClose = jest.fn();
    const { getByTestId } = render(<NotificationContainer />);
    NotificationManager.error({
      title: 'ERROR!',
      content: 'An error has occured!',
      onClose,
      onHide,
    });
    const notification = getByTestId('Notification-Close');
    fireEvent.click(notification);
    expect(onClose).toHaveBeenCalled();
    jest.runAllTimers();
    expect(onHide).toHaveBeenCalled();
  });
});