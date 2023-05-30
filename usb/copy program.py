import os
import shutil
import time

def copy_files_from_usb(usb_drive, destination_folder):
    while True:
        if os.path.exists(usb_drive):
            # Get the list of files on the USB drive
            files = os.listdir(usb_drive)
            
            for file in files:
                # Copy each file to the destination folder
                source_path = os.path.join(usb_drive, file)
                destination_path = os.path.join(destination_folder, file)
                shutil.copy2(source_path, destination_path)
                print(f"File '{file}' copied to {destination_folder}.")
            
            # Wait for a few seconds before checking again
            time.sleep(5)
        else:
            # Wait for a few seconds before checking again
            time.sleep(5)

# Example usage
usb_drive = "/path/to/usb/drive"  # Replace with the path to your USB drive
destination_folder = "/path/to/destination/folder"  # Replace with the path to the destination folder

copy_files_from_usb(usb_drive, destination_folder)
